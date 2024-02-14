import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "demo",
  plugins: [react()],
  assetsInclude: ["**/*.wsz"],
  optimizeDeps: {
    include: ["winamp-eqf"],
  },
});
