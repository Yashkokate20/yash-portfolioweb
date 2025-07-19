
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';
import { heroData, heroConfig } from '../data';
import LazySpline from './LazySpline';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { timeline, orbs } = heroConfig.animations;
    const tl = gsap.timeline({ delay: timeline.delay });

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
        duration: timeline.headline.duration,
        ease: timeline.headline.ease
      }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: timeline.subtitle.duration, 
        ease: timeline.subtitle.ease 
      },
      timeline.subtitle.offset
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: timeline.cta.duration, 
        ease: timeline.cta.ease 
      },
      timeline.cta.offset
    )
    .fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: timeline.spline.duration, 
        ease: timeline.spline.ease 
      },
      timeline.spline.offset
    );

    // Floating orbs animation
    gsap.set(orbsRef.current?.children || [], {
      opacity: 0.6,
    });

    Array.from(orbsRef.current?.children || []).forEach((orb, index) => {
      gsap.to(orb, {
        y: Math.random() * orbs.movement - orbs.movement/2,
        x: Math.random() * orbs.movement - orbs.movement/2,
        duration: orbs.duration + Math.random() * orbs.randomRange,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * orbs.stagger
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
        <LazySpline 
          url={heroData.splineUrl}
          className="w-full h-full"
          priority="high"
        />
      </div>

      {/* Floating Neon Orbs */}
      <div ref={orbsRef} className="absolute inset-0 z-10 pointer-events-none">
        {heroData.floatingOrbs.map((orb, index) => (
          <div 
            key={index}
            className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full ${orb.glow}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div ref={headlineRef} className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Hi, I'm <span className="gradient-text font-semibold">{heroData.name}</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">
              {heroData.title}
            </span>
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {heroData.subtitle}
          </p>
        </div>

        <div ref={ctaRef}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 pulse-glow hover:scale-105 transition-transform"
          >
            {heroData.ctaText}
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
