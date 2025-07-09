import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories, skillsConfig } from '@/data';
import { createTitleAnimation, createStaggeredAnimation, createGSAPContext } from '@/utils/animations';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return createGSAPContext(() => {
      // Title animation
      createTitleAnimation(titleRef.current, titleRef.current);

      // Skills cards staggered animation
      const skillCards = skillsRef.current?.querySelectorAll('.skill-card');
      createStaggeredAnimation(skillCards, skillsRef.current);
    }, sectionRef);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={skillsConfig.id} 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-80" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-16 gradient-text"
        >
          {skillsConfig.title}
        </h2>
        
        <div 
          ref={skillsRef}
          className={`grid ${skillsConfig.gridConfig.desktop} ${skillsConfig.gridConfig.gap}`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-card space-y-6">
              <h3 className="text-xl font-medium text-center text-primary mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="glass p-4 rounded-lg group hover:glow-cyan transition-all duration-300 cursor-pointer transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon 
                        className="text-primary group-hover:text-neon-cyan transition-colors duration-300" 
                        size={24} 
                        weight="light"
                      />
                      <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;