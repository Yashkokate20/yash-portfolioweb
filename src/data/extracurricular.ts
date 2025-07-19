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
  // Coming soon - extracurricular section will be updated with relevant activities
];

// Configuration for the section
export const extracurricularConfig = {
  id: "extracurricular", 
  title: "Beyond Academics",
  subtitle: "Leadership, volunteering, and personal interests - Coming Soon",
  backgroundEffects: true,
  animationConfig: {
    stagger: {
      amount: 1.2,
      from: "start" as const
    },
    parallaxIntensity: 15
  }
};