// https://nuxt.com/docs/api/configuration/nuxt-config
// import { createResolver } from "@nuxt/kit";

// const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/apollo", "@unocss/nuxt", "@nuxt/devtools"],

  css: [
    // SCSS file in the project
    // resolve("./assets/css/main.scss"),
  ],
  unocss: {
    // presets
    attributify: true, // enabled `@unocss/preset-attributify`,
    uno: true, // enabled `@unocss/preset-uno`
    icons: true,
  },
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
