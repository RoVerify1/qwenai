import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        primary: '#ff7a00',
        'primary-glow': 'rgba(255, 122, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(255, 122, 0, 0.5), 0 0 20px rgba(255, 122, 0, 0.3)',
        'neon-lg': '0 0 20px rgba(255, 122, 0, 0.6), 0 0 40px rgba(255, 122, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
