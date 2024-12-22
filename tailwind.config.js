/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './cv.html',
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      fontFamily: {
          'sans': ['azo-mono', 'sans-serif'],

          'serif': ['recoleta', 'serif']
      },
      colors: {
          'redRob': '#E84141',
          'blueRob': '#334D9D',
          'blackRob': '#000000',
          'brownRob': '#603324',
          'whiteRob': '#FAF7EB',
      },
    extend: {
          aspectRatio: {
              '4/3': '4/3',
          }
    },
  },
  plugins: [],
}
