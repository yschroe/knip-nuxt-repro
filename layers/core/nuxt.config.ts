import path from "node:path";
import { fileURLToPath } from "node:url";

const layerRootDir = path.dirname(fileURLToPath(import.meta.url));
const layerAppDir = path.join(layerRootDir, "./app");

export default defineNuxtConfig({
  modules: ["@nuxt/ui"],

  ui: {
    experimental: {
      componentDetection: true,
    },
  },

  css: [path.join(layerAppDir, "./assets/css/main.css")],

  alias: {
    "@core": layerAppDir,
  },
});
