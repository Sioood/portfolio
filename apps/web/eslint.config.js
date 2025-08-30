import eslint from '@portfolio/eslint'

import { withNuxt } from './.nuxt/eslint.config.mjs'

export default withNuxt(
  eslint({
    oxlint: 'node_modules/@portfolio/oxlint/.oxlintrc.json',
    prettier: true,
    typescript: true,
    vue: true,
    tailwindcss: 'node_modules/@portfolio/ui/assets/css/main.css',
  }),
)
