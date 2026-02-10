/** Route middleware for the module */
export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    console.log(to);
  }
});
