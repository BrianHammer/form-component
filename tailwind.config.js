/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {

    screens: {
      "desktop": "800px",
    },

    extend: {
      colors: {
        "light-green": "hsl(148, 38%, 91%)",
        "green": "hsl(169, 82%, 27%)",
        "red": "hsl(0, 66%, 56%)",

        "white": "hsl(0, 0%, 100%)",
        "medium-grey": "hsl(186, 15%, 59%)",
        "dark-grey": "hsl(187, 24%, 22%)"
      },

      fontFamily: {
        "main": "Karla"
      },

      fontWeight: {
        "regular": "400",
        "heavy": "700"
      }
    },
  },
  plugins: [],
}

