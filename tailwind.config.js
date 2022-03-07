// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      lightShades: '#F9F5D7',
      lightAccent: '#8B9FA1',
      mainColor: '#B7845B',
      darkAccent: '#867664',
      darkShades: '#1D2021',
      primary: '#b7845b',
      info: '#1e2123',
      success: '#6ca253',
      warning: '#e9921b',
      danger: '#f44336',
    },
    extend: {
      gridTemplateColumns: {
        '24fr': 'repeat(2, minmax(0, 4fr))',
        '50%': 'repeat(4, 50%)',
      },
      gridTemplateRows: {
        '50%': 'repeat(2, 50%)',
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
