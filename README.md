
# Yash Kokate - Professional Portfolio

A modern, responsive portfolio website with **instant GitHub-to-live updates** built with React, TypeScript, and GSAP animations.

## 🚀 **INSTANT UPDATES** - Edit on GitHub, Live in 2-3 Minutes!

Your website now automatically updates whenever you edit files on GitHub - no manual deployment needed!

### ⚡ **Quick Edit Workflow:**
1. **Edit any file** in `src/data/` on GitHub
2. **Commit changes**
3. **Wait 2-3 minutes** - your live site updates automatically! 🎉

## 📝 **Easy Content Management**

All content is easily editable in `src/data/` files:

- **`hero.ts`** - Name, title, description, CTA button
- **`about.ts`** - Bio, skills, profile image
- **`experience.ts`** - Work history and achievements  
- **`projects.ts`** - Portfolio projects and demos
- **`skills.ts`** - Technical skills and categories
- **`contact.ts`** - Contact info and social links
- **`site-config.ts`** - Global settings and social media

### 🖼️ **Update Profile Image Instantly:**
1. Upload new `yash-profile.png` to `public/` folder on GitHub
2. Commit - image updates automatically with cache-busting!

## 🔄 **Auto-Deployment Features**

- ✅ **Smart triggers** - Rebuilds only when content changes
- ✅ **Dynamic cache-busting** - No more stale content issues  
- ✅ **Fast deploys** - Optimized for data-only changes
- ✅ **Error prevention** - Validates content before deployment
- ✅ **Browser cache management** - Forces updates when needed

## 📱 **Performance Features**

- **🚀 Instant updates** - GitHub edits live in 2-3 minutes
- **⚡ Smart caching** - Fast loading + instant updates
- **🖼️ Dynamic image optimization** - Auto cache-busting
- **📱 Responsive design** - Perfect on all devices
- **🎨 Smooth animations** - GSAP-powered transitions
- **♿ Accessibility** - Screen reader friendly

## 🛠️ **For Developers**

### **Local Development:**
```bash
npm install
npm run dev
```

### **Manual Build:**
```bash
npm run build
npm run preview
```

### **Environment Variables:**
```bash
VITE_BUILD_TIME=<timestamp>     # Auto-generated
VITE_COMMIT_HASH=<git-hash>     # Auto-generated  
VITE_BUILD_ID=<build-number>    # Auto-generated
```

## 📧 **Email Integration**

Connect to Supabase for contact form functionality:
1. Click "Supabase" button in Lovable interface
2. Create/connect project
3. Email functionality auto-configures

## 🚀 **Deployment Options**

### **GitHub Pages (Current):**
- ✅ Auto-deploys on every GitHub commit
- ✅ Custom domain support
- ✅ Free hosting with instant updates

### **Alternative Platforms:**
- **Vercel:** Connect GitHub repo for auto-deploy
- **Netlify:** Import from GitHub for continuous deployment

## 🔧 **Troubleshooting**

### **Changes not appearing?**
1. Check GitHub Actions tab for deployment status
2. Wait 3-5 minutes for full propagation  
3. Hard refresh browser (Ctrl+F5 / Cmd+Shift+R)
4. Check browser developer tools for cache issues

### **Build errors?**
1. Verify JSON syntax in data files
2. Check for missing commas or brackets
3. Review GitHub Actions logs for details

### **Images not loading?**
1. Ensure images are in `public/` folder
2. Use exact filename `yash-profile.png`
3. Check file size (under 5MB recommended)

## 📋 **Content Editing Examples**

### **Add New Experience:**
```typescript
// In src/data/experience.ts
{
  title: "Senior Developer",
  company: "Tech Company",
  period: "2024 - Present", 
  description: "Leading development of...",
  side: "left"
},
```

### **Add New Project:**
```typescript
// In src/data/projects.ts
{
  title: "Amazing App",
  description: "Revolutionary application that...",
  tech: ["React", "Node.js", "MongoDB"],
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/user/repo"
},
```

### **Update Contact Info:**
```typescript
// In src/data/site-config.ts
contact: {
  email: "newemail@domain.com",
  phone: "+1 (555) 123-4567",
  location: "New City, Country"
}
```

## 📞 **Support**

- **Documentation:** See `EDITING-GUIDE.md` for detailed instructions
- **Issues:** Open GitHub issue for technical problems
- **Quick help:** Check GitHub Actions logs for deployment status

---

## 🎯 **Key Benefits**

✅ **Instant updates** - Edit content on GitHub, live in minutes  
🔄 **No technical knowledge needed** - Simple file editing  
🚀 **Blazing fast** - Optimized performance with smart caching  
📱 **Mobile perfect** - Responsive design for all devices  
🛡️ **Reliable** - Auto-deployment with error handling  
🎨 **Professional** - Modern design with smooth animations  

**Built with ❤️ using [Lovable](https://lovable.dev) + Auto-deployment magic!**
