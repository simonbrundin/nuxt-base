// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    ("gh:simonbrundin/nuxt-layers/bast",
    { giget: { auth: process.env.GITHUB_AUTH, installDependencies: true } }),
  ],
  imports: {
    dirs: ["./stores"],
  },
});
