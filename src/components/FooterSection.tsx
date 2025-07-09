import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  EnvelopeSimple,
  ArrowUp
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer content animation
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating particles animation
      const particles = particlesRef.current?.querySelectorAll('.particle');
      if (particles) {
        particles.forEach((particle, index) => {
          gsap.set(particle, {
            x: gsap.utils.random(-50, 50),
            y: gsap.utils.random(-50, 50),
            scale: gsap.utils.random(0.5, 1.5),
            opacity: gsap.utils.random(0.3, 0.8)
          });

          gsap.to(particle, {
            x: `+=${gsap.utils.random(-30, 30)}`,
            y: `+=${gsap.utils.random(-30, 30)}`,
            duration: gsap.utils.random(3, 6),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2
          });

          gsap.to(particle, {
            opacity: gsap.utils.random(0.2, 0.9),
            duration: gsap.utils.random(2, 4),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: LinkedinLogo, url: '#', label: 'LinkedIn' },
    { icon: GithubLogo, url: '#', label: 'GitHub' },
    { icon: TwitterLogo, url: '#', label: 'Twitter' },
    { icon: EnvelopeSimple, url: 'mailto:yash@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer 
      ref={sectionRef}
      className="relative py-16 px-6 overflow-hidden bg-gradient-to-t from-background via-background/95 to-background/80"
    >
      {/* Floating Particles Background */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="particle absolute w-2 h-2 rounded-full bg-primary/30 glow-cyan"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div 
        ref={contentRef}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light gradient-text mb-4">
              Yash Kokate
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Trader & Value Investor specializing in quantitative analysis, 
              algorithmic trading, and financial technology innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-full hover:glow-cyan transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} weight="light" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-primary mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-primary mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-foreground/80">
                <span className="text-accent">Email:</span><br />
                yash.kokate@example.com
              </p>
              <p className="text-foreground/80">
                <span className="text-accent">Location:</span><br />
                Mumbai, India
              </p>
              <p className="text-foreground/80">
                <span className="text-accent">Availability:</span><br />
                Open to opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Yash Kokate. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-primary hover:text-neon-cyan transition-colors duration-300 group"
            >
              <span>Back to Top</span>
              <ArrowUp 
                size={16} 
                weight="light" 
                className="group-hover:translate-y-1 transition-transform duration-300" 
              />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, GSAP, and modern web technologies • Designed for performance and accessibility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;