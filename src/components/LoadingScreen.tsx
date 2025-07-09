import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loadingRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onComplete
        });
      }
    });

    // Animate progress bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 3,
      ease: "power2.out"
    })
    .to(textRef.current, {
      opacity: 0.7,
      duration: 0.5
    }, "-=1");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <div
          ref={textRef}
          className="mb-8 text-4xl md:text-6xl font-light tracking-wider gradient-text"
        >
          Yash Kokate
        </div>
        
        <div className="w-80 h-1 bg-muted rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-0 glow-cyan"
          />
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground font-light">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;