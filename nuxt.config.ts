// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@unocss/nuxt", "@nuxt/devtools", "@nuxtjs/apollo"],
  devtools: { enabled: true },

  imports: {
    dirs: ["./stores"],
  },
  unocss: {
    // presets
    attributify: true, // enabled `@unocss/preset-attributify`,
    uno: true, // enabled `@unocss/preset-uno`
    icons: true,
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
