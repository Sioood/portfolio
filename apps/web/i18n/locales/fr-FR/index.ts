import { getMessagesWithNamespace } from '@portfolio/nuxt-essentials/i18n/utils/namespace'

export default defineI18nLocale(async () => {
  const namespacesFiles = {
    translations: () => import('./translations.json'),
    experiments: () => import('./experiments.json'),
  }

  return await getMessagesWithNamespace(namespacesFiles)
})
