// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends: ['@portfolio/ui'],
  modules: ['@nuxt/eslint'],
  i18n: {
    defaultLocale: 'fr-FR',
    // ISO 639-1 + ISO 3166-1
    locales: [{ code: 'fr-FR', name: 'Français', file: 'fr-FR/index.ts' }],
  },
  site: {
    url: 'https://web.com',
    name: 'Web',
    description: 'Welcome to my awesome site!',
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': false,
      },
    },
  },
})
