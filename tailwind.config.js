/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "theme-base",
    "theme-brutal",
    "theme-neon" ,
  ],
  theme: {
    extend: {
      textColor: {
        theme: {
          base: "var(--color-primary)",
          muted: "var(--color-primary-muted)",
          inverted: "var(--color-primary-inverted)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          tertiary: "var(--color-tertiary)",
          accent: "var(--color-accent)",
        },
      },
      backgroundColor: {
        theme: {
          base: "var(--color-primary)",
          muted: "var(--color-primary-muted)",
          inverted: "var(--color-primary-inverted)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          tertiary: "var(--color-tertiary)",
          accent: "var(--color-accent)",
        }
      },
      borderRadius: {
       
         'theme-base': "var(--border-radius)",
          'theme-sm': "var(--border-radius-small)",
          'theme-lg': "var(--border-radius-large)",
          'theme-full': "var(--border-radius-full)",
       
      },
      borderColor: {
        theme: {
          base: "var(--color-primary)",
          muted: "var(--color-primary-muted)",
          inverted: "var(--color-primary-inverted)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          tertiary: "var(--color-tertiary)",
          accent: "var(--color-accent)",
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}