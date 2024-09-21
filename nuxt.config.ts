// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ["/", "sitemap.xml"],
  //   },
  // },
  modules: [// "nuxt-simple-sitemap"
  '@nuxtjs/tailwindcss', '@nuxt/content', "@nuxthq/studio"],

  css: ['~/assets/css/main.css'],
  components: ['~/components'],

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
  app: {
    // it's default page transition. If no css page transition is defined, it will be used and cause some latency
    // pageTransition: { name: "page", mode: "out-in" },
  },

  compatibilityDate: '2024-09-21',
})