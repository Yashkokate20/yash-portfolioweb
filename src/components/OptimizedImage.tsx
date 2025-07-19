
import { useState, useRef, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onError?: () => void;
  onLoad?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = "/placeholder.svg",
  onError,
  onLoad 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    console.log('Image failed to load:', src);
    setHasError(true);
    onError?.();
  };

  const imageSrc = hasError ? fallbackSrc : src;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {!isLoaded && isInView && (
        <Skeleton className="absolute inset-0 rounded-full" />
      )}
      
      {isInView && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {!isInView && (
        <div className={`${className} bg-muted rounded-full flex items-center justify-center`}>
          <div className="text-muted-foreground text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
