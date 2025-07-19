// Global site configuration - central place for all site-wide settings

export const siteConfig = {
  // Basic site information
  site: {
    name: "Yash Kokate",
    title: "Trader & Value Investor",
    description: "Professional portfolio showcasing expertise in trading, quantitative analysis, and FinTech innovation",
    url: "https://yashkokate.com",
    author: "Yash Kokate"
  },

  // Contact information (used across multiple components)
  contact: {
    email: "yashkokate0801@gmail.com",
    phone: "+91 8928719893",
    location: "New York, NY",
    timezone: "EST",
    availability: "Open to opportunities"
  },

  // Social media profiles (consistent URLs across site)
  social: {
    linkedin: "https://linkedin.com/in/yashkokate",
    github: "https://github.com/yashkokate",
    twitter: "https://twitter.com/yashkokate",
    email: "yashkokate0801@gmail.com"
  },

  // SEO and meta information
  meta: {
    keywords: [
      "trader",
      "value investor", 
      "quantitative analysis",
      "fintech",
      "algorithmic trading",
      "financial markets",
      "portfolio management"
    ],
    ogImage: "/og-image.png",
    favicon: "/favicon.ico"
  },

  // Feature flags for easy toggling
  features: {
    emailIntegration: true,
    analyticsTracking: false,
    darkModeToggle: true,
    animationsEnabled: true,
    contactForm: true
  },

  // Theme and branding
  branding: {
    primaryColor: "hsl(180, 100%, 50%)", // Cyan
    secondaryColor: "hsl(270, 100%, 50%)", // Purple  
    accentColor: "hsl(330, 100%, 50%)", // Pink
    logoText: "YK",
    tagline: "Transforming Data into Opportunities"
  }
};

// Type definitions for better IDE support
export type SiteConfig = typeof siteConfig;
export type ContactInfo = typeof siteConfig.contact;
export type SocialLinks = typeof siteConfig.social;
