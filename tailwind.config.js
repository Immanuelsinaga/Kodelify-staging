/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#121418',
        'secondary' : '#7A1FA2',
        'font' : '#EAF1FE'
      }
    },
  },
  plugins: [],
  fontFamily: {
		inter: ["Inter", "sans-serif"],
		rubik: ["Rubik", "sans-serif"],
		opensans: ["Open Sans", "sans-serif"],
	},
}