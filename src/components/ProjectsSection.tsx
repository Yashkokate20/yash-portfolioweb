
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { ArrowRight, Clock } from 'phosphor-react';
import { projects, projectsConfig } from '../data';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

      // Project cards animation
      const cards = scrollContainerRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            stagger: {
              amount: 1.2,
              from: "start"
            },
            scrollTrigger: {
              trigger: scrollContainerRef.current,
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
      id="projects" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-16 gradient-text"
        >
          {projectsConfig.title}
        </h2>
        
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-8"
        >
          <div className="flex space-x-8 w-max">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card w-80 h-[480px] flex-shrink-0 group cursor-pointer"
              >
                <div className={`glass rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:glow-cyan h-full flex flex-col ${project.isComingSoon ? 'border-2 border-dashed border-primary/30' : ''}`}>
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Project Icon */}
                    <div className="absolute top-4 right-4 p-2 glass rounded-full">
                      <project.icon size={24} className="text-primary" weight="light" />
                    </div>

                    {/* Coming Soon Badge */}
                    {project.isComingSoon && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock size={12} weight="light" />
                        Coming Soon
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed text-sm line-clamp-3 flex-1">
                      {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs bg-primary/10 text-primary/60 rounded-full border border-primary/20">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className={`w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ${project.isComingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
                      disabled={project.isComingSoon}
                    >
                      {project.isComingSoon ? 'Stay Tuned' : 'View Project'}
                      <ArrowRight className="ml-2" size={16} weight="light" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary transition-colors duration-200 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
