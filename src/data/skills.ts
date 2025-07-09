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
    title: "Financial & Quantitative Analysis",
    skills: [
      { name: "Technical Analysis", icon: ChartLineUp },
      { name: "Risk Management", icon: ShieldCheck },
      { name: "Portfolio Optimization", icon: TrendUp },
      { name: "Quantitative Modeling", icon: Calculator },
      { name: "Derivatives Trading", icon: CurrencyCircleDollar },
      { name: "Financial Modeling", icon: FileSpreadsheet }
    ]
  },
  {
    title: "Technologies & Platforms",
    skills: [
      { name: "Trading Platforms", icon: Lightning },
      { name: "Market Data APIs", icon: Database },
      { name: "Financial Databases", icon: Globe },
      { name: "AI/ML Tools", icon: Brain },
      { name: "Cloud Computing", icon: CloudArrowUp },
      { name: "Algorithmic Trading", icon: Robot }
    ]
  },
  {
    title: "Programming & Development",
    skills: [
      { name: "Python", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "React", icon: Code },
      { name: "Data Science", icon: Calculator },
      { name: "Git/Version Control", icon: GitBranch },
      { name: "Command Line", icon: Terminal }
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