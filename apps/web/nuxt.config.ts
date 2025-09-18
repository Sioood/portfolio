// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends: ['@portfolio/ui'],
  modules: ['@nuxt/eslint'],
  runtimeConfig: {
    public: {
      rybbitSrc: process.env.NUXT_PUBLIC_RYBBIT_SRC || 'https://app.rybbit.io/api/script.js',
      rybbitSiteId: process.env.NUXT_PUBLIC_RYBBIT_SITE_ID,
    },
  },
  i18n: {
    defaultLocale: 'fr-FR',
    // ISO 639-1 + ISO 3166-1
    locales: [{ code: 'fr-FR', name: 'Français', file: 'fr-FR/index.ts' }],
  },
  site: {
    url: 'https://theodupont.fr',
    name: 'Théo Dupont',
    description: 'Portfolio de Théo Dupont, développeur full-stack.',
  },
  ogImage: {
    fonts: [
      'Inter:400',
      'Inter:700',
      {
        name: 'nyght-serif-light-italic',
        weight: 300,
        path: '/nyght-serif-light-italic.otf',
      },
    ],
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': false,
      },
    },
  },
})
