
// Extracurricular activities data configuration

import { 
  Trophy,
  TrendUp,
  Users,
  BookOpen,
  Microphone,
  Heart,
  Handshake,
  GraduationCap,
  ChartLineUp,
  Globe,
  Lightbulb,
  Target
} from 'phosphor-react';
import { ExtracurricularActivity } from '@/types';

// EASY EDITING GUIDE:
// To add more activities, copy this template:
/*
{
  title: "Activity Title",
  description: "Detailed description of the activity, achievements, and impact...",
  icon: Trophy, // Choose appropriate icon
  size: "medium", // "small", "medium", or "large"
  color: "text-neon-cyan", // Choose color theme
  category: "Competition" // Optional category
}
*/

export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    title: "National Trading Competition Winner",
    description: "Won first place in a prestigious national-level trading competition, demonstrating exceptional market analysis skills and strategic trading execution. Competed against 500+ participants from top financial institutions and universities across the country.",
    icon: Trophy,
    size: "large",
    color: "text-neon-cyan",
    category: "Competition"
  },
  {
    title: "Inter-College Trading Championship",
    description: "Secured top position in inter-college trading championship, showcasing advanced understanding of market dynamics, risk management, and profitable trading strategies. Led team to victory with consistent performance over 3-month competition period.",
    icon: TrendUp,
    size: "large", 
    color: "text-neon-purple",
    category: "Competition"
  }
  // TODO: Add more activities as needed
  // You can easily add more entries here by copying the template above
];

// Configuration for the section
export const extracurricularConfig = {
  id: "extracurricular", 
  title: "Beyond Academics",
  subtitle: "Leadership, competitions, and personal achievements",
  backgroundEffects: true,
  animationConfig: {
    stagger: {
      amount: 1.2,
      from: "start" as const
    },
    parallaxIntensity: 15
  }
};
