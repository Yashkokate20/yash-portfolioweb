// Projects data configuration

import { 
  Robot,
  ChartLineUp,
  CurrencyCircleDollar,
  ShieldCheck,
  TrendUp,
  Lightning
} from 'phosphor-react';
import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Stock Analyst AI Agent",
    description: "Spearheaded the end-to-end design and deployment of an AI-powered stock analyst bot, leveraging Google Gemini and multi-API integrations to deliver real-time, professional-grade financial analysis via a Telegram interface. Achieved a 97% reduction in stock research time, automating a 30-minute manual process into a comprehensive analysis delivered in under 60 seconds.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: ["Google Gemini", "Node.js", "API Integration", "GitHub", "Telegram Bot", "TradingView Charts"],
    icon: Robot,
    gradient: "from-neon-cyan to-neon-purple",
    githubUrl: "#"
  },
  {
    title: "Investment Risk Management",
    description: "Administered calculations for portfolio beta, monthly returns, Treynor Ratio, and Value at Risk (VaR). Visualized data using graphs to assess investment risk and performance. Learned to quantify risk-to-reward using the Treynor Ratio and evaluated portfolio risks through VaR analysis.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    tech: ["Financial Metrics", "Beta Calculation", "VaR Analysis", "Treynor Ratio", "Risk Assessment", "Data Visualization"],
    icon: ShieldCheck,
    gradient: "from-neon-purple to-neon-pink",
    demoUrl: "#"
  },
  {
    title: "A Study on Stock Market (Research Project)",
    description: "Conducted an in-depth research project examining the intricacies of the stock market, focusing on various stock exchanges, investment principles, and market participants. Focused on the Indian stock market, particularly NSE & BSE, and their regulatory frameworks; explored various investment types, with emphasis on mutual funds, equity, and debt investments.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    tech: ["Market Research", "NSE & BSE Analysis", "Investment Principles", "Regulatory Frameworks", "Financial Analysis", "Research Methodology"],
    icon: ChartLineUp,
    gradient: "from-neon-pink to-neon-orange",
    demoUrl: "#"
  }
];

export const projectsConfig = {
  id: "projects",
  title: "Featured Projects",
  subtitle: "Innovative solutions and technical achievements"
};
