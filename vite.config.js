import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["robots.txt", "maskable.png"],
      manifest: {
        start_url: "/",
        name: "CS 490 Personality Quiz Web Version",
        short_name: "CS490PersonalityQuizWeb",
        theme_color: "#ffffff",
        description:
          "Web version of the personality application found in Develop in Swift fundamentals book.",
        icons: [
          {
            src: "maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
