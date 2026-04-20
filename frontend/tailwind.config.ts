import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        secondary: "#EF4444",
        accent: "#FBBF24",
        dark: "#0a0a0a",
        "dark-card": "rgba(20, 10, 5, 0.7)",
        "dark-border": "rgba(249, 115, 22, 0.2)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(239, 68, 68, 0.15)",
        "glow-sm": "0 0 10px rgba(249, 115, 22, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      keyframes: {
        tap: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        float: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-60px)" },
        },
      },
      animation: {
        tap: "tap 0.15s ease-in-out",
        float: "float 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

// tw: 1775240107216

// tw: 1775273559814

// tw: 1775285878468

// tw: 1775383853975

// tw: 1775390228102

// tw: 1775437407983

// tw: 1775511201491

// tw: 1775598896774

// tw: 1775643616663

// tw: 1775695778035

// tw: 1775710793623

// tw: 1775751776217

// tw: 1775796319173

// tw: 1775827988510

// tw: 1775871275345

// tw: 1775920021578

// tw: 1775966349538

// tw: 1776046240763

// tw: 1776062464342

// tw: 1776083692660

// tw: 1776115738411

// tw: 1776143496032

// tw: 1776170579941

// tw: 1776185738739

// tw: 1776214729873

// tw: 1776247406413

// tw: 1776256213770

// tw: 1776269451852

// tw: 1776315411947

// tw: 1776330625401

// tw: 1776349454677

// tw: 1776372453053

// tw: 1776400534067

// tw: 1776431395892

// tw: 1776459139542

// tw: 1776478907212

// tw: 1776492801142

// tw: 1776517411871

// tw: 1776548840553

// tw: 1776584422701

// tw: 1776618034626

// tw: 1776643333009

// tw: 1776671261608
