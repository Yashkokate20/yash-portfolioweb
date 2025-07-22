
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { ArrowRight, Clock, GithubLogo, ArrowSquareOut } from 'phosphor-react';
import { projects, projectsConfig } from '../data';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

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
      const cards = gridContainerRef.current?.querySelectorAll('.project-card');
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
              trigger: gridContainerRef.current,
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

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.isComingSoon) return;
    
    if (project.demoUrl && project.demoUrl !== '#') {
      window.open(project.demoUrl, '_blank');
    } else if (project.githubUrl && project.githubUrl !== '#') {
      window.open(project.githubUrl, '_blank');
    }
  };

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
        
        <p className="text-center text-muted-foreground mb-16 text-lg">
          {projectsConfig.subtitle}
        </p>
        
        {/* Fixed Height Grid Container */}
        <div 
          ref={gridContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer h-[480px]"
              onClick={() => handleProjectClick(project)}
            >
              <div className={`glass rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:glow-cyan h-full flex flex-col ${
                project.isComingSoon ? 'border-2 border-dashed border-primary/30' : ''
              }`}>
                {/* Project Image - Fixed Height */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Project Icon */}
                  <div className="absolute top-3 right-3 p-2 glass rounded-full">
                    <project.icon size={20} className="text-primary" weight="light" />
                  </div>

                  {/* Coming Soon Badge */}
                  {project.isComingSoon && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium flex items-center gap-1">
                      <Clock size={10} weight="light" />
                      Coming Soon
                    </div>
                  )}
                </div>
                
                {/* Project Content - Flexible Height */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title - Fixed Height with Line Clamp */}
                  <h3 className="text-lg font-medium text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2 h-14 flex items-start">
                    {project.title}
                  </h3>
                  
                  {/* Description - Fixed Height with Line Clamp */}
                  <p className="text-foreground/80 mb-4 leading-relaxed text-sm line-clamp-4 h-20 flex items-start">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack - Fixed Height */}
                  <div className="flex flex-wrap gap-1.5 mb-4 h-16 content-start">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 h-fit"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary/60 rounded-full border border-primary/20 h-fit">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons - Fixed Height at Bottom */}
                  <div className="flex gap-2 mt-auto h-9">
                    {!project.isComingSoon && (
                      <>
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 h-9"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demoUrl, '_blank');
                            }}
                          >
                            <ArrowSquareOut className="mr-1" size={14} weight="light" />
                            Demo
                          </Button>
                        )}
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 h-9"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, '_blank');
                            }}
                          >
                            <GithubLogo className="mr-1" size={14} weight="light" />
                            Code
                          </Button>
                        )}
                        {(!project.demoUrl || project.demoUrl === '#') && (!project.githubUrl || project.githubUrl === '#') && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 h-9"
                          >
                            View Project
                            <ArrowRight className="ml-1" size={14} weight="light" />
                          </Button>
                        )}
                      </>
                    )}
                    {project.isComingSoon && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full opacity-60 cursor-not-allowed h-9"
                        disabled
                      >
                        Stay Tuned
                        <Clock className="ml-1" size={14} weight="light" />
                      </Button>
                    )}
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

export default ProjectsSection;
