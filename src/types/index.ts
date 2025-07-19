
// TypeScript interfaces for portfolio data structures

import { Icon } from 'phosphor-react';

// Common interfaces
export interface IconType {
  icon: Icon;
  size?: number;
  className?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

// Skills Section
export interface Skill {
  name: string;
  icon: Icon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Experience Section  
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  side: 'left' | 'right';
}

// Projects Section
export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  icon: Icon;
  gradient: string;
  demoUrl?: string;
  githubUrl?: string;
  isComingSoon?: boolean; // Added for "Coming Soon" projects
}

// Awards Section
export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: Icon;
  color: string;
}

// Education Section
export interface Education {
  institution: string;
  degree: string;
  field?: string;
  location: string;
  period: string;
  status?: string;
  gpa?: string;
  honors?: string;
}

// Extracurricular Section
export interface ExtracurricularActivity {
  title: string;
  description: string;
  icon: Icon;
  size: 'small' | 'medium' | 'large';
  color: string;
  category?: string;
}

// Animation Configuration
export interface AnimationConfig {
  duration: number;
  ease: string;
  stagger?: {
    amount: number;
    from: string;
  };
  scrollTrigger?: {
    start: string;
    end: string;
    toggleActions: string;
  };
}

// Section Configuration
export interface SectionConfig {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  backgroundEffects?: boolean;
}
