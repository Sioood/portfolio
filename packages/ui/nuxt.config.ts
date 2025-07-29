// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss'],
  alias: { '~ui': resolve('./') },
  components: [
    {
      path: resolve('./components'),
      prefix: 'UI',
    },
  ],
})
