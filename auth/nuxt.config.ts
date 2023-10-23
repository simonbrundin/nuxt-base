// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["gh:simonbrundin/nuxt-layers/base"],
  modules: ["@pinia/nuxt"],
  imports: {
    dirs: ["./stores"],
  },
});
