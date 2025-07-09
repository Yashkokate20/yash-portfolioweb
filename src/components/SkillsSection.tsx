import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChartLineUp, 
  TrendUp, 
  Calculator,
  Code,
  Globe,
  Database,
  Brain,
  Lightning,
  ShieldCheck
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Financial & Quantitative Analysis",
    skills: [
      { name: "Technical Analysis", icon: ChartLineUp },
      { name: "Risk Management", icon: ShieldCheck },
      { name: "Portfolio Optimization", icon: TrendUp },
      { name: "Quantitative Modeling", icon: Calculator }
    ]
  },
  {
    title: "Technologies & Platforms",
    skills: [
      { name: "Trading Platforms", icon: Lightning },
      { name: "Market Data APIs", icon: Database },
      { name: "Financial Databases", icon: Globe },
      { name: "AI/ML Tools", icon: Brain }
    ]
  },
  {
    title: "Programming & Development",
    skills: [
      { name: "Python", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "React", icon: Code },
      { name: "Data Science", icon: Calculator }
    ]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

      // Skills cards staggered animation
      const skillCards = skillsRef.current?.querySelectorAll('.skill-card');
      if (skillCards) {
        gsap.fromTo(skillCards,
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
            filter: "blur(8px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
            stagger: {
              amount: 0.8,
              from: "start"
            },
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
              end: "bottom 15%",
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
      id="skills" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-80" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-16 gradient-text"
        >
          Core Competencies
        </h2>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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