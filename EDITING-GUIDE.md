
# 🚀 Portfolio Updated with Your Resume Data!

✅ **COMPLETED**: Portfolio now reflects your actual resume with real data  
✅ **NEW**: Education section added before Experience  
✅ **UPDATED**: All sections now match your background  

Your website now updates **automatically within 2-3 minutes** when you edit data files on GitHub!

## 📝 How to Edit Content

### 1. **Hero Section** (`src/data/hero.ts`)
```typescript
export const heroData = {
  name: "Your Name",                    // ← Edit your name
  title: "Your Title",                  // ← Edit your job title
  subtitle: "Your description...",      // ← Edit your description
  ctaText: "Hire Me",                  // ← Edit button text
  // ... rest stays the same
};
```

### 2. **About Section** (`src/data/about.ts`)
```typescript
export const aboutData = {
  title: "About Me",                    // ← Section title
  bio: "Your bio text here...",         // ← Edit your bio
  skills: [                             // ← Add/remove skills
    "Skill 1",
    "Skill 2",
    "New Skill"                         // ← Add new skills
  ]
};
```

### 3. **Experience** (`src/data/experience.ts`)
```typescript
export const experiences: Experience[] = [
  {
    title: "Job Title",                 // ← Your job title
    company: "Company Name",            // ← Company name
    period: "2023 - Present",           // ← Work period
    description: "What you did...",     // ← Job description
    side: "left"                        // ← Keep as "left" or "right"
  },
  // Add more experiences here...
];
```

### 4. **Projects** (`src/data/projects.ts`)
```typescript
export const projects: Project[] = [
  {
    title: "Project Name",              // ← Project title
    description: "Project details...",  // ← What the project does
    image: "https://image-url.com",     // ← Project image URL
    tech: ["React", "Node.js"],         // ← Technologies used
    demoUrl: "https://demo.com",        // ← Live demo link
    githubUrl: "https://github.com/...",// ← GitHub repo link
  },
  // Add more projects here...
];
```

### 5. **Contact Info** (`src/data/site-config.ts`)
```typescript
export const siteConfig = {
  contact: {
    email: "your@email.com",            // ← Your email
    phone: "+1 234 567 8900",           // ← Your phone
    location: "Your City, Country",     // ← Your location
  },
  social: {
    linkedin: "https://linkedin.com/in/you", // ← Your LinkedIn
    github: "https://github.com/you",        // ← Your GitHub
    twitter: "https://twitter.com/you",      // ← Your Twitter
  }
};
```

## 🖼️ **Update Profile Image**

1. **Upload new image** to `public/` folder in GitHub
2. **Name it exactly:** `yash-profile.png`
3. **Commit changes** - image updates automatically!

**Supported formats:** PNG, JPG, WebP  
**Recommended size:** 512x512px

## ⚡ **Quick Edit Workflow**

1. **Go to GitHub** → Your repository
2. **Navigate to** `src/data/` folder
3. **Click** the file you want to edit (e.g., `hero.ts`)
4. **Click** the pencil icon (✏️) to edit
5. **Make your changes**
6. **Scroll down** and click "Commit changes"
7. **Wait 2-3 minutes** - your live site updates automatically! 🎉

## 🔄 **Auto-Deployment Status**

Your site automatically rebuilds when you:
- ✅ Edit any file in `src/data/`
- ✅ Upload images to `public/`
- ✅ Update any content files

**No manual deployment needed!**

## 📱 **Testing Updates**

After editing:
1. Wait 2-3 minutes for deployment
2. Visit your live site
3. Hard refresh (Ctrl+F5 / Cmd+Shift+R) if needed
4. Changes should appear immediately!

## 🆘 **Need Help?**

If your changes don't appear:
1. Check the "Actions" tab in GitHub for deployment status
2. Ensure your edits don't have syntax errors
3. Hard refresh your browser (Ctrl+F5)
4. Wait up to 5 minutes for full propagation

## 📋 **Adding New Content**

### **New Experience Entry:**
Copy an existing experience block and modify:
```typescript
{
  title: "New Job Title",
  company: "New Company",
  period: "2024 - Present",
  description: "New job description...",
  side: "left" // Alternate "left" and "right"
},
```

### **New Project:**
Copy an existing project block and modify:
```typescript
{
  title: "New Project",
  description: "Project description...",
  image: "https://unsplash.com/photo-id",
  tech: ["Technology1", "Technology2"],
  icon: Robot, // Choose from available icons
  gradient: "from-neon-cyan to-neon-purple",
  demoUrl: "#",
  githubUrl: "#"
},
```

### **New Skill Category:**
Add to `src/data/skills.ts`:
```typescript
{
  title: "New Skill Category",
  skills: [
    { name: "Skill Name", icon: Code },
    // Add more skills...
  ]
},
```

---

**🎯 Your website now updates instantly with every GitHub edit!**
