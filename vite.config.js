import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import seoPages from "./vite-plugins/seo-pages.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  process.env.VITE_SITE_URL ??= env.VITE_SITE_URL ?? "";
  return {
    plugins: [react(), seoPages()],
    build: { target: "es2020", cssCodeSplit: false },
  };
});
