import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { extracurricularActivities, extracurricularConfig } from '@/data';
import { createTitleAnimation, createStaggeredAnimation, createParallaxEffect, createGSAPContext } from '@/utils/animations';

gsap.registerPlugin(ScrollTrigger);

const ExtracurricularSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return createGSAPContext(() => {
      // Title animation
      createTitleAnimation(titleRef.current, titleRef.current);

      // Activity cards animation with random stagger
      const cards = gridRef.current?.querySelectorAll('.activity-card');
      createStaggeredAnimation(
        cards, 
        gridRef.current, 
        'fadeInScale',
        extracurricularConfig.animationConfig.stagger
      );

      // Enhanced parallax effect
      createParallaxEffect(cards, extracurricularConfig.animationConfig.parallaxIntensity);
    }, sectionRef);
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small': 
        return 'col-span-1 row-span-1 h-56 md:h-48';
      case 'medium': 
        return 'col-span-1 md:col-span-2 row-span-1 h-56 md:h-52';
      case 'large': 
        return 'col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 h-56 md:h-96';
      default: 
        return 'col-span-1 row-span-1 h-56 md:h-48';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id={extracurricularConfig.id} 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-16 gradient-text"
        >
          {extracurricularConfig.title}
        </h2>
        
        {/* Responsive Grid Layout */}
        <div 
          ref={gridRef}
          className={`grid ${extracurricularConfig.gridConfig.desktop} ${extracurricularConfig.gridConfig.gap} ${extracurricularConfig.gridConfig.autoRows}`}
        >
          {extracurricularActivities.map((activity, index) => (
            <div
              key={index}
              className={`activity-card ${getSizeClasses(activity.size)} group cursor-pointer`}
            >
              <div className="glass p-4 md:p-6 rounded-lg h-full flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-105 hover:glow-pink transform hover:-rotate-1 relative overflow-hidden">
                {/* Activity Icon */}
                <div className="mb-3 md:mb-4 flex justify-center relative z-10">
                  <div className="p-3 md:p-4 rounded-full glass backdrop-blur-md">
                    <activity.icon 
                      size={activity.size === 'large' ? 40 : activity.size === 'medium' ? 32 : 24} 
                      className={`${activity.color} group-hover:animate-pulse transition-all duration-300 group-hover:scale-110`}
                      weight="light"
                    />
                  </div>
                </div>
                
                {/* Activity Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className={`${
                    activity.size === 'large' ? 'text-lg md:text-xl' : 
                    activity.size === 'medium' ? 'text-base md:text-lg' : 'text-sm md:text-base'
                  } font-medium text-primary mb-2 md:mb-3 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2`}>
                    {activity.title}
                  </h3>
                  
                  <p className={`text-foreground/80 leading-relaxed flex-1 ${
                    activity.size === 'small' ? 'text-xs md:text-sm' : 
                    activity.size === 'large' ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                  } line-clamp-3 md:line-clamp-4`}>
                    {activity.description}
                  </p>
                  
                  {/* Category Badge */}
                  {activity.category && (
                    <div className="mt-2 md:mt-3">
                      <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary/80 rounded-full border border-primary/20 capitalize">
                        {activity.category}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;