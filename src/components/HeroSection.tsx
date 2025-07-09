import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate headline
    tl.fromTo(headlineRef.current, 
      { 
        opacity: 0, 
        y: 50, 
        filter: 'blur(10px)' 
      },
      { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power3.out"
      }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=1"
    );

    // Floating orbs animation
    gsap.set(orbsRef.current?.children || [], {
      opacity: 0.6,
    });

    Array.from(orbsRef.current?.children || []).forEach((orb, index) => {
      gsap.to(orb, {
        y: Math.random() * 20 - 10,
        x: Math.random() * 20 - 10,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline 3D Model */}
      <div ref={splineRef} className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-3MUqioJ4y4CAJeGYk2GT1ob8/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>

      {/* Floating Neon Orbs */}
      <div ref={orbsRef} className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full glow-cyan"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-neon-purple rounded-full glow-purple"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-neon-pink rounded-full glow-pink"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-neon-green rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-neon-orange rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div ref={headlineRef} className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Hi, I'm <span className="gradient-text font-semibold">Yash Kokate</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">
              Trader & Value Investor
            </span>
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Transforming market data into profitable opportunities through quantitative analysis 
            and strategic investment decisions in the FinTech ecosystem.
          </p>
        </div>

        <div ref={ctaRef}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 pulse-glow hover:scale-105 transition-transform"
          >
            Hire Me
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;