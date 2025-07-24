
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
   extend: {
  animation: {
    float: 'float 3s ease-in-out infinite',
    'slide-left': 'slideLeft 0.3s ease-out',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    slideLeft: {
      '0%': { transform: 'translateX(10px)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
  },
}

  },

  plugins: [],
};

export default config;
