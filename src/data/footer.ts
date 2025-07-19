
// Footer section data configuration

import { 
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  EnvelopeSimple
} from 'phosphor-react';

export const footerData = {
  brand: {
    name: "Yash Kokate",
    description: "Trader & Value Investor specializing in quantitative analysis, algorithmic trading, and financial technology innovation."
  },
  contact: {
    email: "yashkokate0801@gmail.com",
    location: "Mumbai, India",
    availability: "Open to opportunities"
  },
  quickLinks: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ],
  socialLinks: [
    { 
      icon: LinkedinLogo, 
      url: 'https://linkedin.com/in/yashkokate', 
      label: 'LinkedIn' 
    },
    { 
      icon: GithubLogo, 
      url: 'https://github.com/yashkokate', 
      label: 'GitHub' 
    },
    { 
      icon: TwitterLogo, 
      url: 'https://twitter.com/yashkokate', 
      label: 'Twitter' 
    },
    { 
      icon: EnvelopeSimple, 
      url: 'mailto:yashkokate0801@gmail.com', 
      label: 'Email' 
    }
  ],
  copyright: {
    year: new Date().getFullYear(),
    name: "Yash Kokate"
  },
  additionalInfo: "Built with React, GSAP, and modern web technologies • Designed for performance and accessibility"
};

export const footerConfig = {
  id: "footer",
  particleCount: 20,
  animations: {
    content: {
      duration: 1,
      ease: "power3.out",
      trigger: "top 90%"
    },
    particles: {
      duration: [3, 6],
      opacity: [0.2, 0.9],
      movement: 30,
      stagger: 0.2
    }
  }
};
