module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
  },
  darkmode: 'class',
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    prefix: "",
    darkTheme: "dark",
    themes: [
      /* Add Daisy theme here*/
    ],
  }
}