import { defineVitestProject } from "@nuxt/test-utils/config";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["{app,layers}/**/__tests__/*.{test,spec}.ts"],
          exclude: ["**/*.nuxt.{test,spec}.ts"],
          environment: "node",
        },
      },
      await defineVitestProject({
        test: {
          name: "nuxt",
          include: ["{app,layers}/**/__tests__/*.nuxt.{test,spec}.ts"],
          environment: "nuxt",
          // Workaround, see: https://github.com/capricorn86/happy-dom/issues/1950#issuecomment-3523878228
          execArgv: [
            "--localstorage-file",
            path.resolve(os.tmpdir(), `vitest-${process.pid}.localstorage`),
          ],
        },
      }),
    ],
  },
});
