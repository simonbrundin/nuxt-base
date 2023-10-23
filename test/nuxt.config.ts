// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    [
      "gh:simonbrundin/nuxt-layers/auth",
      { giget: { auth: process.env.GITHUB_AUTH } },
    ],
  ],
  modules: ["@nuxt/image"],
});
