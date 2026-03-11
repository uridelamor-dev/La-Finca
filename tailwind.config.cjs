/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#E5E2D9",
        "off-white": "#FBFBEF",
        terracotta: "#D66E27",
        olive: "#505631",
        charcoal: "#2B3210",
        "old-gold": "#D6E2E7",
        "night-blue": "#2B3210",
      },
      fontFamily: {
        serif: ["'TAN Tangkiwood'", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        script: ["Allura", "cursive"],
      },
      letterSpacing: {
        wide2: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 24px rgba(43, 50, 16, 0.08)",
        glow: "0 0 0 1px rgba(214, 110, 39, 0.18), 0 20px 50px rgba(43, 50, 16, 0.25)",
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(120deg, rgba(251, 251, 239, 0.92), rgba(214, 110, 39, 0.82), rgba(43, 50, 16, 0.85))",
        "garden-texture": "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(214,110,39,0.18), transparent 45%), linear-gradient(160deg, rgba(251,251,239,0.98), rgba(229,226,217,0.95))",
        "festival-glow": "radial-gradient(circle at 20% 10%, rgba(214,110,39,0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(80,86,49,0.35), transparent 55%), linear-gradient(160deg, rgba(43,50,16,0.95), rgba(43,50,16,0.9))",
      },
    },
  },
  plugins: [],
};
