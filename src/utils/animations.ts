// Shared animation utilities and configurations

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Animation presets
export const animationPresets = {
  fadeInUp: {
    from: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
    },
    to: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out"
    }
  },
  
  fadeInScale: {
    from: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)"
    },
    to: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power3.out"
    }
  },
  
  slideInLeft: {
    from: {
      opacity: 0,
      x: -60,
      filter: "blur(8px)"
    },
    to: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out"
    }
  },
  
  slideInRight: {
    from: {
      opacity: 0,
      x: 60,
      filter: "blur(8px)"
    },
    to: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out"
    }
  }
};

// Standard scroll trigger configuration
export const scrollTriggerConfig = {
  standard: {
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none reverse"
  },
  
  timeline: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
};

// Animation helper functions
export const createTitleAnimation = (
  element: HTMLElement | null,
  trigger?: HTMLElement | null
) => {
  if (!element) return;
  
  return gsap.fromTo(element,
    animationPresets.fadeInUp.from,
    {
      ...animationPresets.fadeInUp.to,
      scrollTrigger: {
        trigger: trigger || element,
        ...scrollTriggerConfig.standard
      }
    }
  );
};

export const createStaggeredAnimation = (
  elements: NodeListOf<Element> | null,
  trigger: HTMLElement | null,
  preset: keyof typeof animationPresets = 'fadeInScale',
  staggerConfig = { amount: 0.8, from: "start" as const }
) => {
  if (!elements || !trigger) return;
  
  return gsap.fromTo(elements,
    animationPresets[preset].from,
    {
      ...animationPresets[preset].to,
      stagger: staggerConfig,
      scrollTrigger: {
        trigger,
        ...scrollTriggerConfig.standard
      }
    }
  );
};

export const createTimelineAnimation = (
  lineElement: HTMLElement | null,
  trigger: HTMLElement | null
) => {
  if (!lineElement || !trigger) return;
  
  return gsap.fromTo(lineElement,
    {
      scaleY: 0,
      transformOrigin: "top"
    },
    {
      scaleY: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        ...scrollTriggerConfig.timeline
      }
    }
  );
};

export const createParallaxEffect = (
  elements: NodeListOf<Element> | null,
  intensity = 20
) => {
  if (!elements) return;
  
  elements.forEach((element, index) => {
    gsap.to(element, {
      y: gsap.utils.random(-intensity, intensity),
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  });
};

// Utility to clean up GSAP contexts
export const createGSAPContext = (
  callback: () => void,
  scope: React.RefObject<HTMLElement>
) => {
  const ctx = gsap.context(callback, scope);
  return () => ctx.revert();
};