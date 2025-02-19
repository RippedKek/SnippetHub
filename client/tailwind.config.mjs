/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#DD6BCA',
        body: '#45C9E3',
        profile: '#06B6D4',
      },
      fontFamily: {
        code: 'Fira Code',
      },
    },
  },
  plugins: [],
}
