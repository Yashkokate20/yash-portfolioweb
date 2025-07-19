// Education section component

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, MapPin, Calendar } from 'phosphor-react';
import { educationData, educationConfig } from '@/data/education';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: educationConfig.animations.section.duration,
            ease: educationConfig.animations.section.ease,
            scrollTrigger: {
              trigger: titleRef.current,
              start: educationConfig.animations.section.trigger,
              toggleActions: "play none none reverse"
            }
          }
        );
      }
      
      // Cards staggered animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.education-card');
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: educationConfig.animations.cards.duration,
            ease: educationConfig.animations.cards.ease,
            stagger: educationConfig.animations.cards.stagger,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: educationConfig.animations.cards.trigger,
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={educationConfig.id}
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent"
          >
            {educationConfig.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {educationConfig.subtitle}
          </p>
        </div>

        {/* Education cards */}
        <div ref={cardsRef} className="max-w-4xl mx-auto space-y-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="education-card group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 
                         hover:border-neon-cyan/30 hover:shadow-lg hover:shadow-neon-cyan/10 
                         transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Education icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 
                                  rounded-2xl flex items-center justify-center 
                                  group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 
                                  transition-all duration-500">
                    <GraduationCap 
                      size={32} 
                      className="text-neon-cyan group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>

                {/* Education details */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {education.institution}
                  </h3>
                  
                  <div className="text-lg font-semibold text-neon-purple mb-2">
                    {education.degree}
                    {education.field && (
                      <span className="text-muted-foreground"> in {education.field}</span>
                    )}
                    {education.honors && (
                      <span className="text-neon-orange ml-2">({education.honors})</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-neon-pink" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-neon-green" />
                      <span>
                        {education.period}
                        {education.status && ` (${education.status})`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;