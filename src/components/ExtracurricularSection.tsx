import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users,
  BookOpen,
  Microphone,
  Heart,
  Handshake,
  GraduationCap,
  ChartLineUp,
  Globe
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    title: "FinTech Mentorship Program",
    description: "Mentoring young professionals entering the financial technology sector",
    icon: GraduationCap,
    size: "large",
    color: "text-neon-cyan"
  },
  {
    title: "Trading Workshop Speaker",
    description: "Regular speaker at trading and investment workshops",
    icon: Microphone,
    size: "medium",
    color: "text-neon-purple"
  },
  {
    title: "Financial Literacy Initiative",
    description: "Volunteer educator for financial literacy programs",
    icon: BookOpen,
    size: "medium",
    color: "text-neon-pink"
  },
  {
    title: "Investment Club President",
    description: "Leading university investment club with 200+ members",
    icon: Users,
    size: "large",
    color: "text-neon-orange"
  },
  {
    title: "Charity Portfolio Management",
    description: "Pro-bono portfolio management for local charities",
    icon: Heart,
    size: "small",
    color: "text-neon-green"
  },
  {
    title: "Industry Networking",
    description: "Active participant in FinTech networking events",
    icon: Handshake,
    size: "small",
    color: "text-neon-cyan"
  },
  {
    title: "Market Research Contributor",
    description: "Contributing to open-source market analysis projects",
    icon: ChartLineUp,
    size: "medium",
    color: "text-neon-purple"
  },
  {
    title: "Global Finance Forum",
    description: "Panel member at international finance conferences",
    icon: Globe,
    size: "large",
    color: "text-neon-pink"
  }
];

const ExtracurricularSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Activity cards animation with random stagger
      const cards = gridRef.current?.querySelectorAll('.activity-card');
      if (cards) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: gsap.utils.random(40, 80),
            scale: 0.8,
            rotation: gsap.utils.random(-5, 5),
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            stagger: {
              amount: 1.2,
              from: "random"
            },
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Parallax effect on scroll
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: gsap.utils.random(-20, 20),
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small': return 'col-span-1 row-span-1 h-48';
      case 'medium': return 'col-span-1 md:col-span-2 row-span-1 h-48';
      case 'large': return 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2 h-96';
      default: return 'col-span-1 row-span-1 h-48';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="extracurricular" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-16 gradient-text"
        >
          Beyond the Charts
        </h2>
        
        {/* Masonry Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-max"
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`activity-card ${getSizeClasses(activity.size)} group cursor-pointer`}
            >
              <div className="glass p-6 rounded-lg h-full flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-105 hover:glow-pink transform hover:rotate-1">
                {/* Activity Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full glass">
                    <activity.icon 
                      size={activity.size === 'large' ? 48 : 32} 
                      className={`${activity.color} group-hover:animate-pulse transition-all duration-300`}
                      weight="light"
                    />
                  </div>
                </div>
                
                {/* Activity Content */}
                <h3 className={`${activity.size === 'large' ? 'text-xl' : 'text-lg'} font-medium text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300`}>
                  {activity.title}
                </h3>
                
                <p className={`text-foreground/80 leading-relaxed ${activity.size === 'small' ? 'text-sm' : ''}`}>
                  {activity.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;