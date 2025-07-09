import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { 
  ArrowRight,
  ChartLineUp,
  Robot,
  CurrencyCircleDollar,
  TrendUp,
  Shield,
  Lightning
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Trading Algorithm",
    description: "Machine learning-powered trading system with 87% accuracy rate and automated risk management.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    tech: ["Python", "TensorFlow", "API Integration"],
    icon: Robot,
    gradient: "from-neon-cyan to-neon-purple"
  },
  {
    title: "Portfolio Analytics Dashboard",
    description: "Real-time portfolio monitoring with advanced analytics and predictive modeling capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    tech: ["React", "D3.js", "WebSocket"],
    icon: ChartLineUp,
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    title: "Crypto Trading Bot",
    description: "Automated cryptocurrency trading with dynamic strategy adjustment and multi-exchange support.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
    tech: ["Node.js", "WebSocket", "APIs"],
    icon: CurrencyCircleDollar,
    gradient: "from-neon-orange to-neon-cyan"
  },
  {
    title: "Risk Assessment Model",
    description: "Quantitative risk modeling system for portfolio optimization and stress testing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    tech: ["Python", "NumPy", "Pandas"],
    icon: Shield,
    gradient: "from-neon-green to-neon-purple"
  },
  {
    title: "Market Sentiment Analyzer",
    description: "NLP-powered sentiment analysis for market prediction using social media and news data.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    tech: ["Python", "NLP", "API"],
    icon: TrendUp,
    gradient: "from-neon-pink to-neon-cyan"
  },
  {
    title: "High-Frequency Trading System",
    description: "Low-latency trading infrastructure with microsecond execution and advanced order management.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
    tech: ["C++", "FIX Protocol", "FPGA"],
    icon: Lightning,
    gradient: "from-neon-cyan to-neon-orange"
  }
];

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
          Featured Projects
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
                className="project-card w-80 flex-shrink-0 group cursor-pointer"
              >
                <div className="glass rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:glow-cyan">
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
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      View Project
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