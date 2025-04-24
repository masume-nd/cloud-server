import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // optional if you're organizing in /src
  ],
  theme: {
    extend: {
      colors: {
        royal: '#4169E1',
        dark_royal: '#2E4BA0',
        dark_green: '#168B86',
        mid_green: '#20B2AA',
        light_green: '#9FF0E4',
        ColoBrand_50: '#F1F4FD',
      },
      fontFamily: {
        // sans: ['var(--font-inter)', ...fontFamily.sans], // or any custom font
      },
      borderRadius: {
        lg: '0.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};

export default config;
