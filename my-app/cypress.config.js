import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173", // Ensure this matches your React app URL
    supportFile: false,
  },
});

