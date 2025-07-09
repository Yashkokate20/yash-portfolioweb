import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  "Chartered Financial Analyst (CFA)",
  "Financial Risk Manager (FRM)",
  "Certified Quantitative Analyst (CQA)",
  "Python for Financial Analysis",
  "Machine Learning for Trading",
  "Algorithmic Trading Certification",
  "Risk Management Professional",
  "Financial Data Science Certificate",
  "Advanced Portfolio Management",
  "Derivatives & Options Trading"
];

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 30,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Marquee scroll animation
      const marqueeContent = marqueeRef.current?.querySelector('.marquee-content');
      if (marqueeContent) {
        // Duplicate content for seamless loop
        const originalContent = marqueeContent.innerHTML;
        marqueeContent.innerHTML = originalContent + originalContent;

        // Create the scrolling animation
        const scrollAnimation = gsap.to(marqueeContent, {
          x: "-50%",
          duration: 30,
          ease: "none",
          repeat: -1
        });

        // Pause on hover
        marqueeRef.current?.addEventListener('mouseenter', () => {
          scrollAnimation.pause();
        });

        marqueeRef.current?.addEventListener('mouseleave', () => {
          scrollAnimation.resume();
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="certifications" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background to-background/70" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-16 gradient-text"
        >
          Licenses & Certifications
        </h2>
        
        {/* Marquee Container */}
        <div 
          ref={marqueeRef}
          className="relative overflow-hidden py-8 cursor-pointer"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling Content */}
          <div className="marquee-content flex items-center space-x-8 whitespace-nowrap">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass px-6 py-4 rounded-lg group hover:glow-cyan transition-all duration-300 flex-shrink-0"
              >
                <span className="text-lg text-foreground/90 group-hover:text-primary transition-colors duration-300 font-light">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Instruction Text */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Hover to pause • Continuous professional development
        </p>
      </div>
    </section>
  );
};

export default CertificationsSection;