// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/apollo", "@unocss/nuxt"],
  buildModules: ["@nuxt/image"],

  css: [
    // SCSS file in the project
    "@/assets/css/main.scss",
  ],

  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint:
          process.env.GRAPHQL_URL || "http://localhost:8080/v1/graphql",
      },
    },
  },
});
