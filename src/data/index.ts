// Main data export file - centralized data management

// Export all section data configurations
export { skillCategories, skillsConfig } from './skills';
export { experiences, experienceConfig } from './experience';
export { projects, projectsConfig } from './projects';
export { awards, awardsConfig } from './awards';
export { extracurricularActivities, extracurricularConfig } from './extracurricular';

// Export new centralized data
export { heroData, heroConfig } from './hero';
export { aboutData, aboutConfig } from './about';
export { navigationData, navigationConfig } from './navigation';
export { footerData, footerConfig } from './footer';
export { contactData, contactConfig } from './contact';
export { siteConfig } from './site-config';

// Certifications data (easily editable)
export const certifications = [
  "CFA Institute - Chartered Financial Analyst",
  "FRM Institute - Financial Risk Manager", 
  "CAIA Association - Chartered Alternative Investment Analyst",
  "CQF Institute - Certificate in Quantitative Finance",
  "PMI - Project Management Professional",
  "Google Cloud - Professional Data Engineer",
  "AWS - Solutions Architect",
  "Microsoft - Azure AI Engineer",
  "Coursera - Machine Learning Specialization",
  "edX - MITx Introduction to Computational Thinking"
];

// Legacy contact info - use siteConfig.contact instead
export const contactInfo = {
  email: "hello@yashkokate.com",
  phone: "+1 (555) 123-4567",
  location: "New York, NY",
  social: {
    linkedin: "https://linkedin.com/in/yashkokate",
    github: "https://github.com/yashkokate",
    twitter: "https://twitter.com/yashkokate"
  }
};
