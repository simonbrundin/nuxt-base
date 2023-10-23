// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["gh:simonbrundin/nuxt-layers/base"],
  imports: {
    dirs: ["./stores"],
  },
});
