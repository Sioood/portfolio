import { defineConfig } from 'eslint/config'
import eslintPrettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from '@devoid/prettier'
import oxlint from 'eslint-plugin-oxlint'

export default defineConfig([
  eslintPrettierPluginRecommended,
  {
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  },
  // oxlint should be the last one
  ...oxlint.buildFromOxlintConfigFile('./node_modules/@devoid/oxlint/.oxlintrc.json'),
])
