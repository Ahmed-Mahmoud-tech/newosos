// packages/tailwind-config/tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: [
      '../../apps/**/*.{js,ts,jsx,tsx}',  // Include all apps
      '../../packages/**/*.{js,ts,jsx,tsx}', // Include shared packages
    ],
    theme: {
        extend: {
          colors: {
            primary: {
              950: 'var(--primary-950)',
              700: 'var(--primary-700)',
              600: 'var(--primary-600)',
              500: 'var(--primary-500)',
              400: 'var(--primary-400)',
              300: 'var(--primary-300)',
              200: 'var(--primary-200)',
              100: 'var(--primary-100)',
              50: 'var(--primary-50)',
              25: 'var(--primary-25)',
            },
            themeGray: {
              900: 'var(--themeGray-900)',
              800: 'var(--themeGray-800)',
              700: 'var(--themeGray-700)',
              500: 'var(--themeGray-500)',
              600: 'var(--themeGray-600)',
              400: 'var(--themeGray-400)',
              300: 'var(--themeGray-300)',
              200: 'var(--themeGray-200)',
              100: 'var(--themeGray-100)',
              50: 'var(--themeGray-50)',
            },
            success: {
              500: 'var(--success-500)',
            },
            themeWhite: {
              white: 'var(--themeWhite-white)',
            },
            themeBlack: {
              black: 'var(--themeBlack-black)',
            },
            error: {
              700: 'var(--error-700)',
              400: 'var(--error-400)',
              200: 'var(--error-200)',
              100: 'var(--error-100)',
              50: 'var(--error-50)',
              25: 'var(--error-25)',
            },
            themeGreen: {
              800: 'var(--themeGreen-800)',
              700: 'var(--themeGreen-700)',
              600: 'var(--themeGreen-600)',
              500: 'var(--themeGreen-500)',
              400: 'var(--themeGreen-400)',
              200: 'var(--themeGreen-200)',
              50: 'var(--themeGreen-50)',
            },
            themeOrange: {
              500: 'var(--themeOrange-500)',
            },
          },
          screens: {},
          keyframes: {},
          animation: {},
        },
      },
      plugins: [require('@tailwindcss/typography')],
  };
  