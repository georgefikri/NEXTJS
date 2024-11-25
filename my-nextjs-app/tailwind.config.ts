import type { Config } from 'tailwindcss';
console.log("Tailwind config loaded!");

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Match all components in the `src` directory
    './src/app/**/*.{js,ts,jsx,tsx}', // Ensure app router files are matched
    './src/pages/**/*.{js,ts,jsx,tsx}', // Match traditional pages directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Include components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
