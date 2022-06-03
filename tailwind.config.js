module.exports = {
  content: ["./index.html", './pages/**/*.{html,js}',
  './components/**/*.{html,js}', "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    gridColumn: {
      'span-16': 'span 16 / span 16',
    },
    gridColumnStart: {
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
    },
    gridColumnEnd: {
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      17: "17",
    },
    gridRowStart: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridRowEnd: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridAutoColumns: {
      '2fr': 'minmax(0, 2fr)',
    },
    gridAutoRows: {
      '2fr': 'minmax(0, 2fr)',
    },
    gap: {
      '11': '2.75rem',
    }, 
    gridTemplateColumns: {
      // Simple 16 column grid
      '16': 'repeat(16, minmax(0, 1fr))',

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
    }
  },
  plugins: [],
};
