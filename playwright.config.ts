import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com/',
    storageState: 'test-data/storageState.json',
    headless: false,
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      dependencies: ['setup'],
    },
    // {
    //   name: 'edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //   },
    //   dependencies: ['setup'],
    // },

    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: { storageState: undefined }
    },
  ]

});
