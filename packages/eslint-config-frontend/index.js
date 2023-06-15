module.exports = {
  extends: ['next', 'next/core-web-vitals', 'turbo', 'prettier'],
  settings: {
    next: {
      rootDir: './src'
    }
  },
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    'no-nested-ternary': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': 'warn',
    'no-console': 'warn'
  }
}
