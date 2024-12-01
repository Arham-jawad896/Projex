/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          main: '#0A0E14',
          content: '#1A1F2B',
        },

        text: {
          primary: '#FFFFFF',
          secondary: '#2C3142',
          disabled: '#1A1F2B',
          heading: '#22d3ee',
        },
        button: {
          primary: '#2C3142',
          hover: '#1A1F2B',
          secondary: '#1A1F2B',
          secondaryHover: '#2C3142',
          cyanButton: '#06B6D41A',
          cyanButtonHover: '#06b6d433',
        },
        link: {
          default: '#2C3142',
          hover: '#1A1F2B',
        },
        card: {
          background: '#1A1F2B',
          header: '#2C3142',
          text: '#FFFFFF',
        },
        input: {
          background: '#0A0E14',
          text: '#FFFFFF',
          border: '#2C3142',
          focus: '#1A1F2B',
        },
        modal: {
          background: '#1A1F2B',
          text: '#FFFFFF',
          closeButton: '#2C3142',
        },
        navbar: {
          background: '#0A0E14',
          text: '#FFFFFF',
          activeLink: '#2C3142',
          hoverLink: '#1A1F2B',
        },
        footer: {
          background: '#0A0E14',
          text: '#2C3142',
        },
        tooltip: {
          background: '#1A1F2B',
          text: '#FFFFFF',
        },
        notification: {
          success: '#2C3142',
          error: '#1A1F2B',
        },
        divider: '#2C3142',
        progressBar: '#2C3142',
        checkbox: '#2C3142',
      },
    },
  },
  plugins: [],
};
