import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        green: '#00CA9A',
        lightGreen: '#00B23D',
        blue: '#006ACB',
        background: '#34588F',
        greenButton: '#00ab66',
        greenDark: '#0e7b4f',
        greenPressed: '#0A5939',
        uiBackground: '#ECE1C4',
      },
    },
  },
  plugins: [],
};
export default config;
