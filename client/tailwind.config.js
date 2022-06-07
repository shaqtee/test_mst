module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFFFFF",

          secondary: "#152747",

          accent: "#513448",

          neutral: "#171618",

          "base-100": "#09090B",

          info: "#66C7FF",

          success: "#87D039",

          warning: "#E3D664",

          error: "#FF7070",
        },
      },
    ],
  },
  theme: {
    extend: {
      spacing: {
        13: "3.5rem",
      },
    },
  },
};
