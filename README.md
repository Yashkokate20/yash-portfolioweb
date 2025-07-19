
# Yash Kokate - Professional Portfolio

A modern, responsive portfolio website for a trader and value investor built with React, TypeScript, and GSAP animations.

## 🚀 Quick Deploy to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically deploy on every push to main

2. **Update Your Profile Image:**
   - Simply upload a new `yash-profile.png` to the `public/` folder
   - Commit and push - your live site updates automatically!
   - Supported formats: PNG, JPG, WebP (recommended: 512x512px)

## 🎯 Content Management

All content is centralized in data files located in `src/data/`:

### 📁 Data Structure

- **`src/data/hero.ts`** - Hero section content (name, title, subtitle, CTA text)
- **`src/data/about.ts`** - About section content (bio, skills)
- **`src/data/skills.ts`** - Skills and technologies
- **`src/data/experience.ts`** - Professional experience entries
- **`src/data/projects.ts`** - Portfolio projects
- **`src/data/awards.ts`** - Awards and recognition
- **`src/data/extracurricular.ts`** - Activities and interests
- **`src/data/contact.ts`** - Contact form and social links
- **`src/data/navigation.ts`** - Navigation menu items
- **`src/data/footer.ts`** - Footer content and links
- **`src/data/site-config.ts`** - Global site settings

### ✏️ How to Edit Content

#### Adding New Experience
```typescript
// In src/data/experience.ts
export const experiences: Experience[] = [
  {
    title: "Your Job Title",
    company: "Company Name", 
    period: "2023 - Present",
    description: "Your job description and achievements...",
    side: "left" // or "right" for alternating layout
  },
  // ... existing entries
];
```

#### Adding New Projects
```typescript
// In src/data/projects.ts
export const projects: Project[] = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "/path/to/image.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/repo",
    featured: true
  },
  // ... existing entries
];
```

#### Updating Personal Information
```typescript
// In src/data/site-config.ts
export const siteConfig = {
  contact: {
    email: "your-email@example.com",
    phone: "+1 (555) 123-4567", 
    location: "Your City, Country"
  },
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle"
  }
};
```

## 📧 Email Integration

To receive contact form submissions via email, you need to connect to Supabase:

1. Click the green "Supabase" button in the top right of the Lovable interface
2. Create or connect to a Supabase project
3. The email functionality will be automatically configured

## 🖼️ Easy Profile Image Updates

### Method 1: Direct GitHub Upload (Recommended)
1. Go to your GitHub repository
2. Navigate to `public/` folder
3. Upload your new `yash-profile.png` (drag & drop works!)
4. Commit changes - your live site updates automatically!

### Method 2: Local Development
```sh
# Replace the image in public/ folder
cp your-new-image.png public/yash-profile.png

# Commit and push
git add public/yash-profile.png
git commit -m "Update profile image"
git push
```

### Image Requirements
- **Format:** PNG, JPG, or WebP
- **Size:** 512x512px recommended (will be auto-optimized)
- **File size:** Under 1MB for best performance
- **Name:** Must be `yash-profile.png` in the `public/` folder

## 🚀 Alternative Deployment Options

### Deploy to Vercel
1. Connect your GitHub repo to Vercel
2. Vercel will auto-deploy on every push
3. Custom domain supported

### Local Development
```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Performance Features

- **🚀 Lazy Loading:** 3D models and images load only when needed
- **⚡ Code Splitting:** Faster initial load with chunked bundles
- **🖼️ Image Optimization:** Automatic compression and format conversion
- **📱 Responsive Design:** Perfect on all device sizes
- **🎨 Smooth Animations:** GSAP-powered transitions
- **♿ Accessibility:** Reduced motion support and screen reader friendly

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **Vite** - Build tool
- **Shadcn/ui** - UI components
- **GitHub Actions** - CI/CD

## 🔧 Troubleshooting

### GitHub Pages Not Updating?
1. Check Actions tab for deployment status
2. Ensure GitHub Pages source is set to "GitHub Actions"
3. Verify repository name matches Vite config base path

### 3D Model Loading Slowly?
- The model lazy loads automatically
- Users with slow connections see optimized loading
- Reduced motion users see a static alternative

### Image Not Showing?
1. Verify image is in `public/` folder
2. Check file name is exactly `yash-profile.png`
3. Ensure image file size is under 5MB

## 📞 Support

For technical issues or questions, please open an issue in this repository.

---

**Built with ❤️ using [Lovable](https://lovable.dev)**
