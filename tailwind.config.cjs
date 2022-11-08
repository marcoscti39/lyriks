/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#121282",
        "dark-blue": "#191624",
        "very-light-blue": "#22C7DB",
        "light-gray": "#9CA3AF",
        "very-light-white": "rgba(255, 255, 255, 0.1)",
        "light-white": "rgba(255, 255, 255, 0.2)",
        "very-opacity-black": "rgba(0, 0, 0, 0.1)",
        "very-opacity-gray": "rgba(156, 163, 175, 0.3)",
        test: "#090959",
        purple: "#150f29",
        "artist-background-to-color": "#121266",
      },
      width: {
        "side-bar-width": "250px",
        "top-charts-fixed-width": "350px",
      },
      margin: {
        "side-bar-width": "250px",
        "top-charts-fixed-width": "350px",
      },

      padding: {
        "top-charts-fixed-width": "350px",
      },
      screens: {
        laptop: "1120px",
      },
    },
  },
  plugins: [],
};
