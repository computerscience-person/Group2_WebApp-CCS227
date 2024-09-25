/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        textcontent: '1050px',
      },
    },
    fontFamily: ({ theme }) => ({
      display: theme('extend.fontFamily.poppins'),
      body: theme('extend.fontFamily.poppins'),
      sans: ['Poppins', 'sans-serif'],
    }),
  },
  plugins: [],
}
