import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: './src/__tests__/e2e/fixtures',
  supportFolder: './src/__tests__/e2e/support',
  e2e: {
    supportFolder: './src/__tests__/e2e/support',
    supportFile: './src/__tests__/e2e/support/e2e.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
