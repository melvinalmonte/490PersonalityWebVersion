import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["robots.txt"],
      manifest: {
        name: "CS 490 Personality Quiz Web Version",
        short_name: "CS490PersonalityQuizWeb",
        description:
          "Web version of the personality application found in Develop in Swift fundamentals book.",
      },
    }),
  ],
});
