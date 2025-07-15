// About section data configuration

export const aboutData = {
  title: "About Me",
  bio: "I'm a passionate trader and value investor with expertise in quantitative analysis and FinTech innovation. My approach combines traditional investment principles with cutting-edge technology to identify and capitalize on market opportunities.",
  profileImage: "https://raw.githubusercontent.com/Yashkokate20/yash-portfolioweb/main/src/assets/yash-profile.png",
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
