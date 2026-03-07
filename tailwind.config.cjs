/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#E9DDC9",
        "off-white": "#F6F1E8",
        terracotta: "#B86E4B",
        olive: "#65725B",
        charcoal: "#1E1B18",
        "old-gold": "#C49A57",
        "night-blue": "#243746",
      },
      fontFamily: {
        serif: ["'Fraunces'", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.18em",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(30, 27, 24, 0.08)",
        glow: "0 0 0 1px rgba(196, 154, 87, 0.18), 0 24px 60px rgba(30, 27, 24, 0.22)",
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(120deg, rgba(246, 241, 232, 0.9), rgba(184, 110, 75, 0.85), rgba(36, 55, 70, 0.85))",
        "garden-texture": "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(196,154,87,0.2), transparent 45%), linear-gradient(160deg, rgba(233,221,201,0.95), rgba(246,241,232,0.92))",
        "festival-glow": "radial-gradient(circle at 20% 10%, rgba(196,154,87,0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(184,110,75,0.28), transparent 55%), linear-gradient(160deg, rgba(30,27,24,0.95), rgba(36,55,70,0.9))",
      },
    },
  },
  plugins: [],
};
