import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // generate relative paths instead of absolute (needed to work correctly with electron)
  plugins: [react()],
})
