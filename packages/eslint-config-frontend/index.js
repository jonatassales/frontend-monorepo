module.exports = {
  extends: ['turbo', 'prettier'],
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@next/next/no-html-link-for-pages': 'off',
    'no-nested-ternary': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': 'warn',
    'no-console': 'warn'
  }
}
