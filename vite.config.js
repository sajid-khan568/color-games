import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ React plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()]
});


