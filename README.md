# Yash Kokate - Professional Portfolio

A modern, responsive portfolio website for a trader and value investor built with React, TypeScript, and GSAP animations.

## 🎯 Content Management

This portfolio is designed for easy content editing. All content is centralized in data files located in `src/data/`:

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

## Project info

**URL**: https://lovable.dev/projects/3e80917a-205f-4fa0-823e-b4fe37b10bed

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3e80917a-205f-4fa0-823e-b4fe37b10bed) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **Vite** - Build tool
- **Shadcn/ui** - UI components
- **Phosphor Icons** - Icon library

## 🚀 Features

- **Responsive Design** - Works on all devices
- **Smooth Animations** - GSAP-powered animations and transitions
- **Modern UI** - Glass morphism effects and neon accents
- **Type Safety** - Full TypeScript support
- **Easy Content Management** - Centralized data configuration
- **Contact Form** - Email integration ready
- **SEO Optimized** - Meta tags and structured data

## 📱 Portfolio Sections

1. **Hero** - Introduction with 3D background
2. **About** - Personal bio and key skills
3. **Skills** - Technical skills and tools
4. **Experience** - Professional timeline
5. **Projects** - Portfolio showcase
6. **Awards** - Recognition and achievements
7. **Certifications** - Professional certifications
8. **Extracurricular** - Activities and interests
9. **Contact** - Contact form and social links

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3e80917a-205f-4fa0-823e-b4fe37b10bed) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
