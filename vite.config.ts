import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/',  // Configura correctamente la base path
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  },
  publicDir: 'public'
})
