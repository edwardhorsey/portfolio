module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
      },
      fontSize: {
        xxs: '0.625rem',
      },
      colors: {
        primary: '#061F3A',
        turquoise: '#04C9D1',
        mockPurple: '#3B2936',
        mockRed: '#bd3c3c',
        primaryPurple: '#1D192A',
        primaryPink: '#C35265',
        blackTransparent: {
          DEFAULT: 'rgba(0, 0, 0, 0.7)',
        },
        blackOpacity30: "rgba(255, 255, 255, 0.01)",
      },
      width: {
        fit: 'fit-content',
      },
      minHeight: {
        96: '24rem',
      },
      dropShadow: {
        "md-black": '1px 1px 2px black',
      }
    },
    fontFamily: {
      sans: ['RobotoThin, Sans-Serif'],
      serif: ['RobotoThin, Sans-Serif'],
      mono: ['RobotoThin, Sans-Serif'],
      display: ['RobotoThin, Sans-Serif'],
      body: ['RobotoThin, Sans-Serif'],
    },
    screens: {
      xxs: '360px', // this is custom
      xs: '480px', // this is custom
      sm: '640px',
      md: '768px',
      lg: '960px', // this used to be 1024px
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
