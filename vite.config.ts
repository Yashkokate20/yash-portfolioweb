
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/yash-portfolio/' : '/',
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
        // Add cache busting to chunk names
        chunkFileNames: (chunkInfo) => {
          const buildTime = process.env.VITE_BUILD_TIME || Date.now();
          return `assets/[name]-[hash]-${buildTime}.js`;
        },
        entryFileNames: (chunkInfo) => {
          const buildTime = process.env.VITE_BUILD_TIME || Date.now();
          return `assets/[name]-[hash]-${buildTime}.js`;
        },
        assetFileNames: (assetInfo) => {
          const buildTime = process.env.VITE_BUILD_TIME || Date.now();
          return `assets/[name]-[hash]-${buildTime}.[ext]`;
        },
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
        drop_console: mode === 'production',
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap']
  }
}));
