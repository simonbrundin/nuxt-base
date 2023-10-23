// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    [
      "gh:simonbrundin/nuxt-layers/base",
      { giget: { auth: process.env.GITHUB_AUTH } },
    ],
  ],
  imports: {
    dirs: ["./stores"],
  },
});
