// Main data export file - centralized data management

// Export all section data configurations
export { skillCategories, skillsConfig } from './skills';
export { experiences, experienceConfig } from './experience';
export { projects, projectsConfig } from './projects';
export { awards, awardsConfig } from './awards';
export { extracurricularActivities, extracurricularConfig } from './extracurricular';
export { educationData, educationConfig } from './education';

// Export new centralized data
export { heroData, heroConfig } from './hero';
export { aboutData, aboutConfig } from './about';
export { navigationData, navigationConfig } from './navigation';
export { footerData, footerConfig } from './footer';
export { contactData, contactConfig } from './contact';
export { siteConfig } from './site-config';

// Certifications data (easily editable)
export const certifications = [
  "Bloomberg Market Concepts (BMC)",
  "Bloomberg Spreadsheet Analysis",
  "NISM-SEBI Investor",
  "PGIM Fixed Income Job Simulation",
  "Bank of America Investment Banking Simulation",
  "Goldman Sachs Excel for Business",
  "Financial Analyst of the New York Jobs CEO Council"
];

// Legacy contact info - use siteConfig.contact instead
export const contactInfo = {
  email: "ykokate@stevens.edu",
  phone: "+91 8928719893",
  location: "Hoboken, NJ",
  social: {
    linkedin: "https://linkedin.com/in/yashkokate",
    github: "https://github.com/yashkokate",
    twitter: "https://twitter.com/yashkokate"
  }
};
