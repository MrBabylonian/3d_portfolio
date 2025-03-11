import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Use relative paths for all assets (important for SPA routing)
  base: "./",
  // Include 3D model files in the build
  assetsInclude: ["**/*.glb", "**/*.fbx"],
  // Configure the build output
  build: {
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Optimize output
    minify: 'terser',
    // Configure CSS
    cssCodeSplit: true,
    // Add manifest for better caching
    manifest: true,
    // Configure rollup
    rollupOptions: {
      output: {
        // Better chunk naming for cache management
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  // Configure server settings for development
  server: {
    // Important for SPA routing in development
    historyApiFallback: true
  },
  // Define environment variables if needed
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
});