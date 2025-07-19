// Hero section data configuration

export const heroData = {
  name: "Yash Kokate",
  title: "Financial Technology & Analytics Graduate Student",
  subtitle: "MS FinTech student at Stevens Institute with hands-on experience in derivatives trading, quantitative analysis, and AI-powered financial solutions.",
  ctaText: "Connect with Me",
  splineUrl: "https://my.spline.design/nexbotrobotcharacterconcept-3MUqioJ4y4CAJeGYk2GT1ob8/",
  floatingOrbs: [
    { position: "top-1/4 left-1/4", size: "w-2 h-2", color: "bg-neon-cyan", glow: "glow-cyan" },
    { position: "top-1/3 right-1/3", size: "w-3 h-3", color: "bg-neon-purple", glow: "glow-purple" },
    { position: "bottom-1/3 left-1/5", size: "w-2 h-2", color: "bg-neon-pink", glow: "glow-pink" },
    { position: "top-1/2 right-1/4", size: "w-1 h-1", color: "bg-neon-green", glow: "" },
    { position: "bottom-1/4 right-1/5", size: "w-2 h-2", color: "bg-neon-orange", glow: "" }
  ]
};

export const heroConfig = {
  id: "hero",
  animations: {
    timeline: {
      delay: 0.5,
      headline: {
        duration: 1.2,
        ease: "power3.out"
      },
      subtitle: {
        duration: 0.8,
        ease: "power2.out",
        offset: "-=0.6"
      },
      cta: {
        duration: 0.6,
        ease: "back.out(1.7)",
        offset: "-=0.4"
      },
      spline: {
        duration: 1,
        ease: "power2.out",
        offset: "-=1"
      }
    },
    orbs: {
      duration: 3,
      randomRange: 2,
      movement: 20,
      stagger: 0.2
    }
  }
};