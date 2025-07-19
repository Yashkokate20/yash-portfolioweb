import { useState, useEffect, useRef } from 'react';

interface LazySplineProps {
  url: string;
  className?: string;
}

const LazySpline = ({ url, className = "" }: LazySplineProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg">
              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
            </div>
          )}
          <iframe
            src={url}
            className="w-full h-full border-0 rounded-lg"
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 opacity-50">
              <div className="w-full h-full border-2 border-dashed border-muted-foreground rounded-lg" />
            </div>
            <p className="text-sm text-muted-foreground">3D Model Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazySpline;