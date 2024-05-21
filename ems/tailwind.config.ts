import { nextui } from '@nextui-org/theme'; // Check the import if nextui is correctly imported as needed
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js" 
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: '#274A8F',       
        jungleGreen: '#278F6C', 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    }
  },
  plugins: [nextui()],
};

export default config;
