
// About section data configuration

// Dynamic cache busting using build-time environment variables
const getBuildTime = () => {
  // Use environment variable from build process, fallback to current timestamp
  return import.meta.env.VITE_BUILD_TIME || Date.now();
};

const getCommitHash = () => {
  // Use commit hash from build process for cache invalidation
  return import.meta.env.VITE_COMMIT_HASH || 'latest';
};

export const aboutData = {
  title: "About Me",
  bio: "I'm a Financial Technology & Analytics graduate student at Stevens Institute with practical experience as a Derivatives & Equity Trader. I combine academic knowledge with real-world trading experience to develop innovative financial solutions and AI-powered market analysis tools.",
  // Dynamic cache busting with build time and commit hash
  profileImage: `https://raw.githubusercontent.com/yash-kokate/yash-portfolio/main/public/yash-profile.png?v=${getBuildTime()}&h=${getCommitHash()}`,
  // Fallback to local image with cache busting
  fallbackImage: `/yash-profile.png?v=${getBuildTime()}`,
  skills: [
    "Derivatives Trading",
    "Quantitative Analysis", 
    "Financial Technology",
    "Risk Management",
    "Python Programming",
    "AI/ML in Finance"
  ]
};

export const aboutConfig = {
  id: "about",
  animations: {
    section: {
      duration: 1,
      trigger: "top 80%"
    },
    image: {
      duration: 1,
      trigger: "top 80%",
      movement: 100
    }
  }
};
