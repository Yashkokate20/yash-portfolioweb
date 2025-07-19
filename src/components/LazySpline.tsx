import { useState, useEffect, useRef, useCallback } from 'react';

interface LazySplineProps {
  url: string;
  className?: string;
  priority?: 'low' | 'high';
}

// Type declaration for Network Information API
interface NavigatorConnection {
  effectiveType?: string;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NavigatorConnection;
}

const LazySpline = ({ url, className = "", priority = 'low' }: LazySplineProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Check if user prefers reduced motion or has slow connection
  const preferReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navigatorWithConnection = navigator as NavigatorWithConnection;
  const isSlowConnection = navigatorWithConnection.connection && navigatorWithConnection.connection.effectiveType && 
    ['slow-2g', '2g'].includes(navigatorWithConnection.connection.effectiveType);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Delay loading for low priority or slow connections
          const delay = priority === 'low' || isSlowConnection ? 500 : 0;
          setTimeout(() => setShouldLoad(true), delay);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: priority === 'high' ? '100px' : '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [priority, isSlowConnection]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    console.log('3D model loaded successfully');
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    console.error('Failed to load 3D model:', url);
  }, [url]);

  // Don't load 3D model if user prefers reduced motion
  if (preferReducedMotion) {
    return (
      <div className={`${className} bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-primary/40 rounded-full" />
          </div>
          <p className="text-sm text-muted-foreground">3D content disabled for reduced motion</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {isInView && shouldLoad ? (
        <div className="relative w-full h-full">
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg z-10">
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
                <div className="w-32 h-1 bg-muted rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          )}
          
          {hasError ? (
            <div className="w-full h-full bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-destructive/20 rounded-full flex items-center justify-center">
                  <span className="text-destructive text-2xl">⚠</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Failed to load 3D model</p>
                <button 
                  onClick={() => {setHasError(false); setShouldLoad(true);}}
                  className="text-xs text-primary hover:underline"
                >
                  Try again
                </button>
              </div>
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              src={url}
              className="w-full h-full border-0 rounded-lg"
              onLoad={handleLoad}
              onError={handleError}
              loading="lazy"
              title="3D Model"
              allow="accelerometer; gyroscope"
            />
          )}
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 opacity-50">
              <div className="w-full h-full border-2 border-dashed border-muted-foreground rounded-lg animate-pulse" />
            </div>
            <p className="text-sm text-muted-foreground">3D Model Ready to Load...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazySpline;
