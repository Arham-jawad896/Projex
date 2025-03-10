import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import tailwindcss from 'tailwindcss'; // Import TailwindCSS as ES module
import autoprefixer from 'autoprefixer'; // Import Autoprefixer as ES module

const ReactCompilerConfig = {
  runtimeModule: '@/mycache',
};

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Alias for src folder
      },
    },

    plugins: [
      // React plugin for Vite with fast refresh
      react({
        babel: {
          plugins: [],
        },
      }),

      // Bundle visualizer (only enabled in production builds)
      isProduction &&
        visualizer({
          open: true, // Opens the analysis report in the browser after build
          filename: './dist/stats.html', // Save the report in the dist folder
        }),

      // Compression plugin (gzip or Brotli)
      compression({
        algorithm: 'brotliCompress', // Use Brotli for better compression
        threshold: 1024, // Only compress files larger than 1KB
        deleteOriginFile: false, // Keep original files
      }),

      // Image optimization
      viteImagemin({
        gifsicle: { optimizationLevel: 7, interlaced: false },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 75 },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        svgo: {
          plugins: [
            { name: 'removeViewBox' },
            { name: 'removeEmptyAttrs', active: false },
          ],
        },
      }),
    ],

    server: {
      port: 5173, // Development server port
      open: true, // Open the browser when server starts
    },

    build: {
      sourcemap: false, // Disable source maps in production
      minify: 'esbuild', // Use esbuild for faster builds
      chunkSizeWarningLimit: 500, // Adjust warning limit for large chunks
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'], // Separate React libraries into their own chunk
          },
        },
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom'], // Prebundle frequently used libraries
      exclude: [], // Exclude libraries you don't want to prebundle
    },

    define: {
      __APP_ENV__: JSON.stringify(mode), // Define environment-specific global variables
    },

    css: {
      postcss: {
        plugins: [
          tailwindcss, // Use the TailwindCSS plugin
          autoprefixer, // Use Autoprefixer plugin
        ],
      },
    },

    esbuild: {
      minify: true,
      target: 'esnext',
      treeShaking: true,
    },
  };
});
