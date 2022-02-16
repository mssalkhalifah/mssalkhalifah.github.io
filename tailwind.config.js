module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      lightShades: '#ECEBEA',
      lightAccent: '#8896A3',
      mainColor: '#646571',
      darkAccent: '#6879A7',
      darkShades: '#1D252C',
      primary: '#646571',
      info: '#1d252c',
      success: '#53995a',
      warning: '#d18922',
      danger: '#f44336',
    },
    extend: {
      gridTemplateColumns: {
        '24fr': 'repeat(2, minmax(0, 4fr))',
      },
      screens: {
        xsm: '290px',
        // => @media (min-width: 290px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        unblur: {
          from: { filter: 'blur(10px)' },
          to: { filter: 'blur(0px)' },
        },
      },
      animation: {
        unblur: 'unblur 0.1s linear',
      },
    },
  },
  plugins: [],
}
