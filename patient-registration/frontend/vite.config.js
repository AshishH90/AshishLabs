import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Application will be served from:
  // https://ashishlabs.com/patient-registration/
  base: "/patient-registration/",

  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
  },

  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    assetsDir: "assets"
  }
});