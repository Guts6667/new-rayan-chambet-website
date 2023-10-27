/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgtransparentcard:
          "linear-gradient(136deg, rgba(255, 255, 255, 0.40) 11.2%, rgba(255, 255, 255, 0.10) 86.21%)",
      },
      colors: {
        primary: "#161616",
        darkgray: "#111111",
      },
      backgroundColor: {
        gradientGreenPurple:
          "radial-gradient(at right bottom, rgb(134, 239, 172), rgb(192, 132, 252))",
      },
      boxShadow: {
        shadowtransparentcard: "4px 0px 24px -1px rgba(255, 255, 255, 0.24);",
      },
      borderColor: {
        bordertransparentcard: "rgba(193, 207, 231, 0.25);",
      },
      animation: {
        "top-slide": "top-slide 0.5s ease-in-out",
        "left-slide": "left-slide 0.5s ease-in-out .6s",
        "infinite-scroll": "infinite-scroll 60s linear infinite",
        "infinite-scroll-reverse": "infinite-scroll-reverse 60s linear infinite",
        "nav-animation": "nav-animation 0.5s ease-in-out",
         "links-animation": "nav-animaton 0.5s ease-in-out .5s",
      },
      keyframes: {
        "top-slide": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "left-slide": {
          "0%": { transform: "translateX(-100%)", opacity: 0, display: "none" },
          "100%": { transform: "translateX(0)", opacity: 1, display: "flex" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "nav-animation": {
          from: { height: "0" },
          to: { height: "fit-content" },
        },
      },
    },

    spacing: {
      10: "10px",
      24: "24px",
    },
  },
  plugins: [],
};
