import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  PaperPlaneTilt,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  EnvelopeSimple
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

      // Form inputs animation
      const formInputs = formRef.current?.querySelectorAll('input, textarea, button');
      if (formInputs) {
        gsap.fromTo(formInputs,
          {
            opacity: 0,
            x: -40,
            filter: "blur(5px)"
          },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Social icons animation
      const socialIcons = socialsRef.current?.querySelectorAll('.social-icon');
      if (socialIcons) {
        gsap.fromTo(socialIcons,
          {
            opacity: 0,
            scale: 0.5,
            rotation: 180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: socialsRef.current,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // You could add toast notification here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: LinkedinLogo, url: '#', label: 'LinkedIn', color: 'hover:text-neon-cyan' },
    { icon: GithubLogo, url: '#', label: 'GitHub', color: 'hover:text-neon-purple' },
    { icon: TwitterLogo, url: '#', label: 'Twitter', color: 'hover:text-neon-pink' },
    { icon: EnvelopeSimple, url: 'mailto:yash@example.com', label: 'Email', color: 'hover:text-neon-orange' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-8 gradient-text"
        >
          Get In Touch
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Ready to discuss opportunities in trading, investment, or FinTech development
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass p-8 rounded-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass border-primary/20 focus:border-primary focus:glow-cyan transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass border-primary/20 focus:border-primary focus:glow-cyan transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="glass border-primary/20 focus:border-primary focus:glow-cyan transition-all duration-300 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:glow-cyan transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <PaperPlaneTilt className="mr-2" size={18} weight="light" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="glass p-8 rounded-lg text-center">
              <h3 className="text-2xl font-medium text-primary mb-4">Let's Connect</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                I'm always interested in discussing new opportunities, sharing insights about financial markets, 
                or collaborating on innovative FinTech projects.
              </p>
              <div className="text-accent font-medium">
                yash.kokate@example.com
              </div>
            </div>
            
            {/* Social Links */}
            <div 
              ref={socialsRef}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-xl font-medium text-primary mb-6 text-center">Follow Me</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon p-3 glass rounded-full transition-all duration-300 ${social.color} hover:scale-110 hover:glow-cyan`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} weight="light" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;