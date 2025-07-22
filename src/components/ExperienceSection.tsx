
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences, experienceConfig } from '../data/experience';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

      // Timeline line drawing animation
      gsap.fromTo(lineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top"
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
              scale: 0.9,
              filter: "blur(8px)"
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power3.out",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={experienceConfig.id}
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background to-background/30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-20 gradient-text"
        >
          {experienceConfig.title}
        </h2>
        
        <div ref={timelineRef} className="relative">
          {/* Central Timeline Line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full glow-cyan"
          />
          
          {/* Timeline Nodes and Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-card relative flex items-center ${
                  exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-cyan z-10 border-4 border-background" />
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${exp.side === 'left' ? 'md:pr-8' : 'md:pl-8'} mt-8 md:mt-0`}>
                  <div className="glass p-6 rounded-lg group hover:glow-purple transition-all duration-300 transform hover:scale-105">
                    <div className="mb-4">
                      <h3 className="text-xl font-medium text-primary mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-accent mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-foreground/90 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
