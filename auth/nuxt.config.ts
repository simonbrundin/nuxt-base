// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../base"],
  modules: [],
  imports: {
    dirs: ["./stores"],
  },
});
