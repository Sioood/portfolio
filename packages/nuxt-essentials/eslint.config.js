import eslint from '@portfolio/eslint'

import { withNuxt } from './.playground/.nuxt/eslint.config.mjs'

export default withNuxt(
  eslint({
    oxlint: 'node_modules/@portfolio/oxlint/.oxlintrc.json',
    prettier: true,
    typescript: true,
    vue: true,
  }),
)
