import {
  addComponentsDir,
  addImportsDir,
  addRouteMiddleware,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

interface ModuleOptions {
  globalMiddleware: {
    enabled: boolean;
  };
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
  },
  defaults: {
    globalMiddleware: {
      enabled: true,
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Add route middleware
    addRouteMiddleware({
      name: "route-logger",
      path: resolve("runtime/middleware/module-middleware"),
      global: options.globalMiddleware.enabled,
    });

    // Auto-register components
    addComponentsDir({
      path: resolve("runtime/components"),
      prefix: "MyModule",
    });

    // Auto-register composables
    addImportsDir(resolve("runtime/composables"));

    // Add alias for the permissions module
    nuxt.options.alias["#my-module"] = resolve("runtime");
  },
});
