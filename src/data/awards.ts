// Awards data configuration

import { 
  Trophy,
  Medal,
  Star,
  Crown
} from 'phosphor-react';
import { Award as AwardType } from '@/types';

export const awards: AwardType[] = [
  {
    title: "Outstanding Trading Performance",
    issuer: "National Trading Association",
    date: "2023",
    description: "Recognized for exceptional trading performance with 23% annual returns and minimal risk exposure.",
    icon: Trophy,
    color: "text-neon-orange"
  },
  {
    title: "FinTech Innovation Award",
    issuer: "Financial Technology Council",
    date: "2022",
    description: "Awarded for developing innovative algorithmic trading solutions that revolutionized market analysis.",
    icon: Star,
    color: "text-neon-cyan"
  },
  {
    title: "Excellence in Risk Management",
    issuer: "Risk Management Institute",
    date: "2022",
    description: "Honored for implementing advanced risk assessment models that prevented significant portfolio losses.",
    icon: Medal,
    color: "text-neon-purple"
  },
  {
    title: "Young Professional of the Year",
    issuer: "Investment Professionals Society",
    date: "2021",
    description: "Recognized as the most promising young professional in quantitative finance and algorithmic trading.",
    icon: Crown,
    color: "text-neon-pink"
  }
];

export const awardsConfig = {
  id: "awards",
  title: "Awards & Recognition",
  subtitle: "Professional achievements and industry recognition"
};