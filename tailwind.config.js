/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Cor primária — Azul-Marinho
        primary: {
          50: "#E6F1FB",
          100: "#B5D4F4",
          200: "#85B7EB",
          400: "#378ADD",
          600: "#185FA5",
          800: "#0C447C",
          900: "#042C53",
          DEFAULT: "#0C447C",
        },

        // Receitas / positivo — Teal
        receita: {
          50: "#E1F5EE",
          100: "#9FE1CB",
          200: "#5DCAA5",
          400: "#1D9E75",
          600: "#0F6E56",
          800: "#085041",
          DEFAULT: "#0F6E56",
        },

        // Despesas / negativo — Coral
        despesa: {
          50: "#FAECE7",
          100: "#F5C4B3",
          200: "#F0997B",
          400: "#D85A30",
          600: "#993C1D",
          800: "#712B13",
          DEFAULT: "#993C1D",
        },

        // Neutro — Gray
        cinza: {
          50: "#F1EFE8",
          75: "#EAE8E0",
          100: "#D3D1C7",
          200: "#B4B2A9",
          400: "#888780",
          600: "#5F5E5A",
          800: "#444441",
          900: "#2C2C2A",
          DEFAULT: "#888780",
        },
      },
    },
  },
  plugins: [],
};
