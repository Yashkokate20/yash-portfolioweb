// Extracurricular activities data configuration

import { 
  Users,
  BookOpen,
  Microphone,
  Heart,
  Handshake,
  GraduationCap,
  ChartLineUp,
  Globe,
  Lightbulb,
  Trophy,
  Rocket,
  Target
} from 'phosphor-react';
import { ExtracurricularActivity } from '@/types';

export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    title: "FinTech Mentorship Program",
    description: "Mentoring young professionals entering the financial technology sector, guiding career development and technical skills.",
    icon: GraduationCap,
    size: "large",
    color: "text-neon-cyan",
    category: "mentorship"
  },
  {
    title: "Trading Workshop Speaker",
    description: "Regular keynote speaker at trading and investment workshops, sharing insights on market analysis.",
    icon: Microphone,
    size: "medium",
    color: "text-neon-purple",
    category: "speaking"
  },
  {
    title: "Financial Literacy Initiative",
    description: "Volunteer educator for community financial literacy programs, promoting financial wellness.",
    icon: BookOpen,
    size: "medium",
    color: "text-neon-pink",
    category: "education"
  },
  {
    title: "Investment Club President",
    description: "Leading university investment club with 200+ active members, organizing events and competitions.",
    icon: Users,
    size: "large",
    color: "text-neon-orange",
    category: "leadership"
  },
  {
    title: "Charity Portfolio Management",
    description: "Pro-bono portfolio management for local charities, maximizing their investment returns.",
    icon: Heart,
    size: "small",
    color: "text-neon-green",
    category: "volunteer"
  },
  {
    title: "Industry Networking Events",
    description: "Active organizer and participant in FinTech networking events and conferences.",
    icon: Handshake,
    size: "small",
    color: "text-neon-cyan",
    category: "networking"
  },
  {
    title: "Market Research Contributor",
    description: "Contributing to open-source market analysis projects and financial modeling libraries.",
    icon: ChartLineUp,
    size: "medium",
    color: "text-neon-purple",
    category: "research"
  },
  {
    title: "Global Finance Forum",
    description: "Panel member at international finance conferences, discussing emerging market trends.",
    icon: Globe,
    size: "large",
    color: "text-neon-pink",
    category: "speaking"
  },
  {
    title: "StartUp Advisory Board",
    description: "Advisor for early-stage FinTech startups on strategy, funding, and market positioning.",
    icon: Lightbulb,
    size: "medium",
    color: "text-neon-orange",
    category: "advisory"
  },
  {
    title: "Trading Competition Winner",
    description: "First place in multiple national trading competitions with consistent top performance.",
    icon: Trophy,
    size: "small",
    color: "text-neon-green",
    category: "achievement"
  },
  {
    title: "Innovation Lab Participant",
    description: "Active member of financial innovation labs, prototyping next-gen trading solutions.",
    icon: Rocket,
    size: "medium",
    color: "text-neon-cyan",
    category: "innovation"
  },
  {
    title: "Risk Management Consultant",
    description: "Freelance consulting for small investment firms on risk assessment and mitigation strategies.",
    icon: Target,
    size: "small",
    color: "text-neon-purple",
    category: "consulting"
  }
];

// Configuration for the section
export const extracurricularConfig = {
  id: "extracurricular",
  title: "Beyond the Charts",
  subtitle: "Community involvement and professional contributions",
  backgroundEffects: true,
  animationConfig: {
    stagger: {
      amount: 1.2,
      from: "start" as const
    },
    parallaxIntensity: 15
  }
};