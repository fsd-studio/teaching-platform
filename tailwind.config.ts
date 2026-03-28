import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/blog/posts/**/*.mdx', // <-- Ensure your MDX folder is covered
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // <-- Add this line!
  ],
}
export default config