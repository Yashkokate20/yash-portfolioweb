
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
  },
  {
    title: "400m Relay Race Champion",
    description: "Won 400m relay race championship at St. Rock's High School, demonstrating speed, endurance, and excellent teamwork. Led the school athletics team to victory in the annual inter-school sports competition with outstanding performance and coordination.",
    icon: Trophy,
    size: "medium",
    color: "text-neon-orange",
    category: "Sports"
  },
  {
    title: "Carrom Tournament Winner",
    description: "Secured 1st place in the school carrom tournament at St. Rock's High School, showcasing strategic thinking, precision, and competitive excellence. Defeated multiple opponents through skillful gameplay and tactical decision-making.",
    icon: Target,
    size: "medium",
    color: "text-neon-green",
    category: "Sports"
  },
  {
    title: "Inter-School Relay Racing",
    description: "Participated and excelled in inter-school relay racing events, representing St. Rock's High School with distinction. Contributed to team victories through consistent performance, athletic dedication, and collaborative team spirit.",
    icon: Users,
    size: "medium",
    color: "text-neon-purple",
    category: "Sports"
  },
  {
    title: "School Sports Excellence",
    description: "Demonstrated exceptional athletic abilities across multiple sports disciplines at St. Rock's High School. Recognized for outstanding sportsmanship, leadership in athletic activities, and contribution to the school's sports culture and achievements.",
    icon: Trophy,
    size: "medium",
    color: "text-neon-cyan",
    category: "Sports"
  },
  {
    title: "Academic Excellence Award",
    description: "Recognized for outstanding academic performance and scholarly achievements at St. Rock's High School. Demonstrated consistent excellence across subjects with strong analytical thinking, problem-solving skills, and dedication to learning.",
    icon: BookOpen,
    size: "large",
    color: "text-neon-orange",
    category: "Academic"
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
