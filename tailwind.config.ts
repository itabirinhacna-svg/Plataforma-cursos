import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: { container: { center: true, padding: '1rem' }, extend: {} },
  plugins: []
};
export default config;
