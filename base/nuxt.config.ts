// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/image"],
  devtools: { enabled: true },
  plugins: ["~/plugins/debounce"],
  extends: [
    "../tairo/layers/tairo",
    "../tairo/layers/tairo-layout-collapse",
    "../tairo/layers/tairo-layout-sidebar",
    "../tairo/layers/tairo-layout-topnav",
  ],
});
