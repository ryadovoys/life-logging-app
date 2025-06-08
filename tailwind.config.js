/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '393px',
      },
      colors: {
        gray: {
          20: '#f7f7f7',
          40: '#dadada', 
          80: '#707070',
        },
        black: '#0d141c',
      },
      fontFamily: {
        'instrument': ['Instrument Sans', 'sans-serif'],
      },
      fontSize: {
        'h2': '21px',
        'body-large': '18px',
        'body': '16px', 
        'body-small': '14px',
        'descriptor': '12px',
      },
      fontWeight: {
        'semibold': 600,
        'medium': 500,
      },
      lineHeight: {
        'tight': 1,
        'normal': 1.43,
        'relaxed': 1.5,
      },
      borderRadius: {
        'ios': '8px',
      },
    },
  },
  plugins: [],
}

