module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'frontend',
    'plugin:cypress/recommended'
  ],
  plugins: ['testing-library', 'cypress'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
}
