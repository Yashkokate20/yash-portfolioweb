
// Cache management utility for dynamic content updates

interface CacheConfig {
  buildTime: string | number;
  commitHash: string;
  buildId: string;
}

// Get cache configuration from environment or defaults
export const getCacheConfig = (): CacheConfig => {
  return {
    buildTime: import.meta.env.VITE_BUILD_TIME || Date.now(),
    commitHash: import.meta.env.VITE_COMMIT_HASH || 'dev',
    buildId: import.meta.env.VITE_BUILD_ID || '0'
  };
};

// Generate cache-busting query string
export const getCacheBuster = (): string => {
  const config = getCacheConfig();
  return `v=${config.buildTime}&h=${config.commitHash}&b=${config.buildId}`;
};

// Add cache busting to any URL
export const addCacheBuster = (url: string): string => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${getCacheBuster()}`;
};

// Force reload specific resources with cache busting
export const invalidateCache = () => {
  if (typeof window !== 'undefined') {
    // Clear browser cache for the current domain
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    
    // Reload with cache bypass
    window.location.reload();
  }
};

// Check if content needs updating based on cache headers
export const shouldUpdateContent = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      cache: 'no-cache'
    });
    
    const lastModified = response.headers.get('last-modified');
    const etag = response.headers.get('etag');
    
    // Compare with stored values to determine if update is needed
    const storedEtag = localStorage.getItem('content-etag');
    
    if (etag && etag !== storedEtag) {
      localStorage.setItem('content-etag', etag);
      return true;
    }
    
    return false;
  } catch (error) {
    console.warn('Cache check failed:', error);
    return false;
  }
};

// Development mode hot reload detection
export const setupHotReload = () => {
  if (import.meta.env.DEV) {
    // Watch for data file changes in development
    const eventSource = new EventSource('/vite-dev-server');
    eventSource.addEventListener('file-changed', (event) => {
      const data = JSON.parse(event.data);
      if (data.path.includes('/data/')) {
        console.log('📝 Data file changed:', data.path);
        window.location.reload();
      }
    });
  }
};
