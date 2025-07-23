// Global site configuration - central place for all site-wide settings

export const siteConfig = {
  // Basic site information
  site: {
    name: "Yash Kokate",
    title: "Financial Technology & Analytics Graduate Student",
    description: "MS FinTech student at Stevens Institute with hands-on experience in derivatives trading, quantitative analysis, and AI-powered financial solutions",
    url: "https://yashkokate.com",
    author: "Yash Kokate"
  },

  // Contact information (used across multiple components)
  contact: {
    email: "ykokate@stevens.edu",
    phone: "+91 8928719893",
    location: "Hoboken, NJ",
    timezone: "EST",
    availability: "Open to opportunities"
  },

  // Social media profiles (consistent URLs across site)
  social: {
    linkedin: "https://www.linkedin.com/in/yashkokate/",
    github: "https://github.com/Yashkokate20?tab=repositories",
    email: "ykokate@stevens.edu"
  },

  // SEO and meta information
  meta: {
    keywords: [
      "financial technology",
      "fintech graduate student", 
      "derivatives trading",
      "quantitative analysis",
      "stevens institute",
      "financial markets",
      "portfolio management",
      "ai in finance",
      "python programming"
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
