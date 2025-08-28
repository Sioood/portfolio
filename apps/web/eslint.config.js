import eslint from '@portfolio/eslint'

import { withNuxt } from './.nuxt/eslint.config.mjs'

// TODO add tailwind
export default withNuxt(
  eslint({
    oxlint: 'node_modules/@portfolio/oxlint/.oxlintrc.json',
    prettier: true,
    typescript: true,
    vue: true,
    tailwindcss: 'node_modules/@portfolio/ui/assets/css/main.css',
  }),
)
