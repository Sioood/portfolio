import { createConfigForNuxt } from '@nuxt/eslint-config'
import baseVue from '@portfolio/eslint/configs/vue'

export default createConfigForNuxt().append(baseVue)
