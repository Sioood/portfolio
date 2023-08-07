// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "sitemap.xml"],
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-simple-sitemap"],
  css: ["~/assets/css/main.css"],
  components: ["~/components"],
  // image: {
  // provider: "directus",
  // directus: {
  //   // This URL needs to include the final `assets/` directory
  //   baseURL: process.env.API_FILE_URL,
  //   // If <nuxt-img:src="data.picture"format="auto"/> doesn't have a modifiers, "format" not working good ?!
  //   modifiers: {
  //     withoutEnlargement: "true",
  //   },
  // },
  // },
});
