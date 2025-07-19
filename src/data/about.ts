
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
  bio: "I'm a passionate trader and value investor with expertise in quantitative analysis and FinTech innovation. My approach combines traditional investment principles with cutting-edge technology to identify and capitalize on market opportunities.",
  // Dynamic cache busting with build time and commit hash
  profileImage: `https://raw.githubusercontent.com/yash-kokate/yash-portfolio/main/public/yash-profile.png?v=${getBuildTime()}&h=${getCommitHash()}`,
  // Fallback to local image with cache busting
  fallbackImage: `/yash-profile.png?v=${getBuildTime()}`,
  skills: [
    "Trading",
    "Analytics", 
    "FinTech",
    "Investment"
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
