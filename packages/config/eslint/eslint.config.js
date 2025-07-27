import tseslint from 'typescript-eslint'
import eslintPrettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from '@stallning/prettier'
import oxlint from 'eslint-plugin-oxlint'

export default tseslint.config([
  eslintPrettierPluginRecommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  },
  // oxlint should be the last one
  ...oxlint.buildFromOxlintConfigFile('./node_modules/@stallning/oxlint/.oxlintrc.json'),
])
