import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData, aboutConfig } from '../data';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="text-center">
            <div className="relative inline-block">
              <div className="w-80 h-80 rounded-full overflow-hidden glass glow-cyan hover:glow-purple transition-all duration-500 hover:scale-105 hover:rotate-3">
                <img 
                  src={aboutData.profileImage}
                  alt="Yash Kokate Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Image failed to load:', aboutData.profileImage);
                    e.currentTarget.src = '/src/assets/yash-profile.png';
                  }}
                />
              </div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light gradient-text">
              {aboutData.title}
            </h2>
            <p className="text-lg/relaxed text-muted-foreground font-light">
              {aboutData.bio}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {aboutData.skills.map((skill, index) => (
                <div key={skill} className="glass text-center p-4 rounded-lg hover:glow-cyan transition-all">
                  <div className="text-sm font-medium">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;