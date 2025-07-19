import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import AwardsSection from '../components/AwardsSection';
import CertificationsSection from '../components/CertificationsSection';
import ExtracurricularSection from '../components/ExtracurricularSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

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
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <CertificationsSection />
      <ExtracurricularSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
