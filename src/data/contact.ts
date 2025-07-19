// Contact section data configuration

import { 
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  EnvelopeSimple
} from 'phosphor-react';

export const contactData = {
  title: "Get In Touch",
  subtitle: "Ready to discuss opportunities in FinTech, trading, or graduate studies",
  email: "ykokate@stevens.edu",
  connectMessage: "I'm always interested in discussing new opportunities, sharing insights about financial markets, or collaborating on innovative FinTech projects and research.",
  form: {
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Your Name",
        required: true
      },
      {
        name: "email", 
        type: "email",
        placeholder: "Your Email",
        required: true
      },
      {
        name: "message",
        type: "textarea",
        placeholder: "Your Message",
        required: true,
        rows: 5
      }
    ],
    submitText: "Send Message",
    submittingText: "Sending..."
  },
  socialLinks: [
    { 
      icon: LinkedinLogo, 
      url: 'https://www.linkedin.com/in/yashkokate/', 
      label: 'LinkedIn', 
      color: 'hover:text-neon-cyan' 
    },
    { 
      icon: GithubLogo, 
      url: 'https://github.com/yashkokate', 
      label: 'GitHub', 
      color: 'hover:text-neon-purple' 
    },
    { 
      icon: EnvelopeSimple, 
      url: 'mailto:ykokate@stevens.edu', 
      label: 'Email', 
      color: 'hover:text-neon-orange' 
    }
  ]
};

export const contactConfig = {
  id: "contact",
  animations: {
    title: {
      duration: 0.8,
      ease: "power3.out",
      trigger: "top 85%"
    },
    form: {
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      trigger: "top 85%"
    },
    socials: {
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1,
      trigger: "top 85%"
    }
  }
};