// Projects data configuration

import { 
  Robot,
  ChartLineUp,
  CurrencyCircleDollar,
  Shield,
  TrendUp,
  Lightning
} from 'phosphor-react';
import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "AI Trading Algorithm",
    description: "Machine learning-powered trading system with 87% accuracy rate and automated risk management. Features real-time market analysis and adaptive strategy optimization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    tech: ["Python", "TensorFlow", "API Integration", "Docker"],
    icon: Robot,
    gradient: "from-neon-cyan to-neon-purple",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Analytics Dashboard",
    description: "Real-time portfolio monitoring with advanced analytics and predictive modeling capabilities. Interactive visualizations and custom alert systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    tech: ["React", "D3.js", "WebSocket", "Node.js"],
    icon: ChartLineUp,
    gradient: "from-neon-purple to-neon-pink",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Crypto Trading Bot",
    description: "Automated cryptocurrency trading with dynamic strategy adjustment and multi-exchange support. Features advanced risk management and profit optimization.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
    tech: ["Node.js", "WebSocket", "APIs", "MongoDB"],
    icon: CurrencyCircleDollar,
    gradient: "from-neon-orange to-neon-cyan",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Risk Assessment Model",
    description: "Quantitative risk modeling system for portfolio optimization and stress testing. Monte Carlo simulations and scenario analysis capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    tech: ["Python", "NumPy", "Pandas", "Jupyter"],
    icon: Shield,
    gradient: "from-neon-green to-neon-purple",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Market Sentiment Analyzer",
    description: "NLP-powered sentiment analysis for market prediction using social media and news data. Real-time sentiment scoring and trend analysis.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    tech: ["Python", "NLP", "API", "Redis"],
    icon: TrendUp,
    gradient: "from-neon-pink to-neon-cyan",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "High-Frequency Trading System",
    description: "Low-latency trading infrastructure with microsecond execution and advanced order management. Custom networking protocols and FPGA acceleration.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
    tech: ["C++", "FIX Protocol", "FPGA", "Linux"],
    icon: Lightning,
    gradient: "from-neon-cyan to-neon-orange",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const projectsConfig = {
  id: "projects",
  title: "Featured Projects",
  subtitle: "Innovative solutions and technical achievements"
};