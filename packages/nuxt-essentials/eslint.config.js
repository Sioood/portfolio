import eslint from '@portfolio/eslint'

import { withNuxt } from './.playground/.nuxt/eslint.config.mjs'

export default withNuxt(
  eslint({
    oxlint: true,
    prettier: true,
    typescript: true,
    vue: true,
  }),
)
