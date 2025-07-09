import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Medal, Star, Crown } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    title: "Best Algorithmic Trading Strategy",
    issuer: "FinTech Innovation Awards",
    date: "2023",
    description: "Recognized for developing a machine learning-based trading algorithm that achieved exceptional performance.",
    icon: Trophy,
    color: "text-neon-cyan"
  },
  {
    title: "Outstanding Risk Management",
    issuer: "Global Finance Institute",
    date: "2022",
    description: "Awarded for implementing innovative risk assessment models that reduced portfolio volatility by 35%.",
    icon: Medal,
    color: "text-neon-purple"
  },
  {
    title: "Rising Star in FinTech",
    issuer: "Financial Technology Council",
    date: "2021",
    description: "Recognized as an emerging leader in financial technology and quantitative analysis.",
    icon: Star,
    color: "text-neon-pink"
  },
  {
    title: "Excellence in Quantitative Analysis",
    issuer: "Institute of Financial Analytics",
    date: "2021",
    description: "Honored for contributions to quantitative modeling and algorithmic trading strategies.",
    icon: Crown,
    color: "text-neon-orange"
  }
];

const AwardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Awards cards animation
      const cards = cardsRef.current?.querySelectorAll('.award-card');
      if (cards) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
            filter: "blur(8px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            stagger: {
              amount: 0.6,
              from: "start"
            },
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="awards" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-16 gradient-text"
        >
          Awards & Recognition
        </h2>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="award-card group cursor-pointer"
            >
              <div className="glass p-8 rounded-lg h-full flex flex-col transition-all duration-500 hover:scale-105 hover:glow-purple">
                {/* Award Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full glass">
                    <award.icon 
                      size={48} 
                      className={`${award.color} group-hover:animate-pulse transition-all duration-300`}
                      weight="light"
                    />
                  </div>
                </div>
                
                {/* Award Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-medium text-primary mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {award.title}
                  </h3>
                  
                  <h4 className="text-lg text-accent mb-2">
                    {award.issuer}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {award.date}
                  </p>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {award.description}
                  </p>
                </div>
                
                {/* Decorative border glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border`} 
                       style={{ background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))', padding: '2px' }}>
                    <div className="bg-background rounded-lg h-full w-full" />
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

export default AwardsSection;