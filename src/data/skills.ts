// Skills data configuration

import { 
  ChartLineUp, 
  TrendUp, 
  Calculator,
  Code,
  Globe,
  Database,
  Brain,
  Lightning,
  ShieldCheck,
  Robot,
  CloudArrowUp,
  CurrencyCircleDollar,
  Calculator as FileSpreadsheet,
  GitBranch,
  Terminal
} from 'phosphor-react';
import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Data Analysis",
    skills: [
      { name: "Python", icon: Code },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Calculator },
      { name: "Matplotlib", icon: ChartLineUp },
      { name: "Data Visualization", icon: TrendUp },
      { name: "Quantitative Analysis", icon: Calculator }
    ]
  },
  {
    title: "Financial Tools & Platforms",
    skills: [
      { name: "Bloomberg Terminal", icon: Lightning },
      { name: "Microsoft Excel-AI", icon: FileSpreadsheet },
      { name: "PowerPoint", icon: Globe },
      { name: "Trading Platforms", icon: CurrencyCircleDollar },
      { name: "Financial Databases", icon: Database },
      { name: "Risk Management Tools", icon: ShieldCheck }
    ]
  },
  {
    title: "Financial Expertise",
    skills: [
      { name: "Financial Modeling", icon: Calculator },
      { name: "Technical Analysis", icon: ChartLineUp },
      { name: "Fundamental Analysis", icon: TrendUp },
      { name: "Risk Management", icon: ShieldCheck },
      { name: "Trading Strategies", icon: Lightning },
      { name: "Portfolio Optimization", icon: Robot },
      { name: "Market Research", icon: Brain },
      { name: "Investment Strategies", icon: CurrencyCircleDollar }
    ]
  }
];

export const skillsConfig = {
  id: "skills",
  title: "Core Competencies",
  subtitle: "Technical expertise and professional skills",
  gridConfig: {
    desktop: "grid-cols-1 lg:grid-cols-3",
    gap: "gap-8"
  }
};