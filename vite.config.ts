import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use '.' to refer to the current working directory to avoid TS issues with process.cwd()
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});