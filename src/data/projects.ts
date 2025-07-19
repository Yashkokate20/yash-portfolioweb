
// Projects data configuration

import { 
  Robot,
  ChartLineUp,
  CurrencyCircleDollar,
  ShieldCheck,
  TrendUp,
  Lightning,
  Rocket,
  Brain
} from 'phosphor-react';
import { Project } from '@/types';

// EASY EDITING GUIDE:
// To add a new project, copy this template and fill in your details:
/*
{
  title: "Your Project Title",
  description: "Detailed description of what your project does and accomplishes...",
  image: "https://images.unsplash.com/photo-XXXXXXXXX", // Find images at unsplash.com
  tech: ["Technology1", "Technology2", "Technology3"], // List all technologies used
  icon: Robot, // Choose from: Robot, ChartLineUp, CurrencyCircleDollar, ShieldCheck, TrendUp, Lightning, Rocket, Brain
  gradient: "from-neon-cyan to-neon-purple", // Choose from gradients below
  githubUrl: "https://github.com/yourusername/repo", // Optional: GitHub link
  demoUrl: "https://yourproject.com" // Optional: Live demo link
}
*/

// Available gradients:
// "from-neon-cyan to-neon-purple"
// "from-neon-purple to-neon-pink" 
// "from-neon-pink to-neon-orange"
// "from-neon-green to-neon-cyan"
// "from-neon-orange to-neon-red"

export const projects: Project[] = [
  {
    title: "Stock Analyst AI Agent",
    description: "Spearheaded the end-to-end design and deployment of an AI-powered stock analyst bot, leveraging Google Gemini and multi-API integrations to deliver real-time, professional-grade financial analysis via a Telegram interface. Achieved a 97% reduction in stock research time, automating a 30-minute manual process into a comprehensive analysis delivered in under 60 seconds.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: ["Google Gemini", "Node.js", "API Integration", "GitHub", "Telegram Bot", "TradingView Charts"],
    icon: Robot,
    gradient: "from-neon-cyan to-neon-purple",
    githubUrl: "#" // TODO: Add your actual GitHub URL
  },
  {
    title: "Investment Risk Management",
    description: "Administered calculations for portfolio beta, monthly returns, Treynor Ratio, and Value at Risk (VaR). Visualized data using graphs to assess investment risk and performance. Learned to quantify risk-to-reward using the Treynor Ratio and evaluated portfolio risks through VaR analysis.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    tech: ["Financial Metrics", "Beta Calculation", "VaR Analysis", "Treynor Ratio", "Risk Assessment", "Data Visualization"],
    icon: ShieldCheck,
    gradient: "from-neon-purple to-neon-pink",
    demoUrl: "#" // TODO: Add demo link if available
  },
  {
    title: "A Study on Stock Market (Research Project)",
    description: "Conducted an in-depth research project examining the intricacies of the stock market, focusing on various stock exchanges, investment principles, and market participants. Focused on the Indian stock market, particularly NSE & BSE, and their regulatory frameworks; explored various investment types, with emphasis on mutual funds, equity, and debt investments.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    tech: ["Market Research", "NSE & BSE Analysis", "Investment Principles", "Regulatory Frameworks", "Financial Analysis", "Research Methodology"],
    icon: ChartLineUp,
    gradient: "from-neon-pink to-neon-orange",
    demoUrl: "#" // TODO: Add research document link
  },
  // NEW: Coming Soon Projects (easily editable)
  {
    title: "Coming Soon - FinTech Innovation Project",
    description: "An exciting new project focusing on cutting-edge financial technology solutions. This project will demonstrate advanced analytical capabilities and innovative approaches to modern financial challenges. Stay tuned for updates!",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44", // Tech/Innovation themed
    tech: ["FinTech", "Innovation", "Analytics", "Technology"],
    icon: Rocket,
    gradient: "from-neon-green to-neon-cyan",
    githubUrl: "#", // Will be updated when project is ready
    isComingSoon: true
  },
  {
    title: "Coming Soon - AI-Driven Market Insights",
    description: "Advanced artificial intelligence project for comprehensive market analysis and predictive insights. This project will showcase machine learning applications in financial markets and automated decision-making systems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995", // AI/ML themed
    tech: ["Artificial Intelligence", "Machine Learning", "Market Analysis", "Predictive Analytics"],
    icon: Brain,
    gradient: "from-neon-orange to-neon-red",
    demoUrl: "#", // Will be updated when project is ready
    isComingSoon: true
  }
];

export const projectsConfig = {
  id: "projects",
  title: "Featured Projects",
  subtitle: "Innovative solutions and technical achievements"
};
