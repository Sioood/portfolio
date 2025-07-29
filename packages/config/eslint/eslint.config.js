import tseslint from 'typescript-eslint'
import eslintPrettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from '@portfolio/prettier'
import oxlint from 'eslint-plugin-oxlint'

export default tseslint.config([
  eslintPrettierPluginRecommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'prettier/prettier': ['error', prettierConfig],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  // oxlint should be the last one
  ...oxlint.buildFromOxlintConfigFile('./node_modules/@portfolio/oxlint/.oxlintrc.json'),
])
