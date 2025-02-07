/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"], // Include your app and source files
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require("tailwindcss-react-native/core-plugins"),
};
