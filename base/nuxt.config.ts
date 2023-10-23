// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/image"],
  devtools: { enabled: true },
  plugins: ["~/plugins/debounce"],
});
