import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Detect deployment platform
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV;
  
  // Set base path based on deployment platform
  let basePath = '/';
  if (mode === 'production') {
    if (isGitHubPages) {
      basePath = '/yash-portfolio/';
    } else if (isVercel) {
      basePath = '/';
    }
  }

  console.log(`🔧 Build configuration:`);
  console.log(`- Mode: ${mode}`);
  console.log(`- GitHub Pages: ${isGitHubPages}`);
  console.log(`- Vercel: ${isVercel}`);
  console.log(`- Base path: ${basePath}`);

  return {
    base: basePath,
    server: {
      host: "::",
      port: 8080,
    },
    define: {
      // Make build-time variables available to the app
      __BUILD_TIME__: JSON.stringify(process.env.VITE_BUILD_TIME || Date.now()),
      __COMMIT_HASH__: JSON.stringify(process.env.VITE_COMMIT_HASH || 'dev'),
      __BUILD_ID__: JSON.stringify(process.env.VITE_BUILD_ID || '0'),
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Simplified chunk naming for better compatibility
          chunkFileNames: `assets/[name]-[hash].js`,
          entryFileNames: `assets/[name]-[hash].js`,
          assetFileNames: `assets/[name]-[hash].[ext]`,
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['gsap'],
            ui: ['@radix-ui/react-avatar', '@radix-ui/react-slot']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          // Keep console logs for debugging white screen issues
          drop_console: false,
          drop_debugger: true
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'gsap']
    }
  };
});
