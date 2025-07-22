
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { PaperPlaneTilt } from 'phosphor-react';
import { contactData, contactConfig } from '../data';
import { useToast } from '../hooks/use-toast';

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
  const { toast } = useToast();

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
          duration: contactConfig.animations.title.duration,
          ease: contactConfig.animations.title.ease,
          scrollTrigger: {
            trigger: titleRef.current,
            start: contactConfig.animations.title.trigger,
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
            duration: contactConfig.animations.form.duration,
            ease: contactConfig.animations.form.ease,
            stagger: contactConfig.animations.form.stagger,
            scrollTrigger: {
              trigger: formRef.current,
              start: contactConfig.animations.form.trigger,
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
            duration: contactConfig.animations.socials.duration,
            ease: contactConfig.animations.socials.ease,
            stagger: contactConfig.animations.socials.stagger,
            scrollTrigger: {
              trigger: socialsRef.current,
              start: contactConfig.animations.socials.trigger,
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
    
    // Check if EmailJS credentials are configured
    const serviceId = 'service_portfolio';
    const templateId = 'template_contact';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    if (serviceId === 'service_portfolio' || templateId === 'template_contact' || publicKey === 'YOUR_PUBLIC_KEY') {
      toast({
        title: "EmailJS Setup Required",
        description: "Please configure EmailJS credentials first. Check the EMAILJS-SETUP.md guide for instructions.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'yashkokate0801@gmail.com'
        },
        publicKey
      );
      
      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email at yashkokate0801@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { socialLinks } = contactData;

  return (
    <section 
      ref={sectionRef}
      id={contactConfig.id}
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light text-center mb-8 gradient-text"
        >
          {contactData.title}
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 text-lg">
          {contactData.subtitle}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass p-8 rounded-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {contactData.form.fields.map((field) => (
                <div key={field.name}>
                  {field.type === 'textarea' ? (
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      rows={field.rows || 5}
                      className="glass border-primary/20 focus:border-primary focus:glow-cyan transition-all duration-300 resize-none"
                      required={field.required}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="glass border-primary/20 focus:border-primary focus:glow-cyan transition-all duration-300"
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:glow-cyan transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                    {contactData.form.submittingText}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <PaperPlaneTilt className="mr-2" size={18} weight="light" />
                    {contactData.form.submitText}
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
                {contactData.connectMessage}
              </p>
              <div className="text-accent font-medium">
                {contactData.email}
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
