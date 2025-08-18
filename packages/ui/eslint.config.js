import { createConfigForNuxt } from '@nuxt/eslint-config'
import baseVue from '@portfolio/eslint/configs/vue'
import baseTailwind from '@portfolio/eslint/configs/tailwind'

export default createConfigForNuxt().append(baseTailwind, baseVue)
