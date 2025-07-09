import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize smooth scrolling and animations after loading
    if (!loading) {
      gsap.utils.toArray('section').forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0.8 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, [loading]);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      
      {/* Placeholder sections for future development */}
      <section id="skills" className="py-20 px-6 text-center">
        <h2 className="text-4xl gradient-text mb-8">Core Competencies</h2>
        <p className="text-muted-foreground">Skills section coming soon...</p>
      </section>
      
      <section id="experience" className="py-20 px-6 text-center">
        <h2 className="text-4xl gradient-text mb-8">Professional Journey</h2>
        <p className="text-muted-foreground">Experience timeline coming soon...</p>
      </section>
      
      <section id="projects" className="py-20 px-6 text-center">
        <h2 className="text-4xl gradient-text mb-8">Featured Projects</h2>
        <p className="text-muted-foreground">Projects showcase coming soon...</p>
      </section>
      
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl gradient-text mb-8">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">Ready to discuss opportunities</p>
        <div className="glass p-8 rounded-lg max-w-md mx-auto">
          <p className="text-lg">Contact form coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
