import { App } from './../app/index';
import { test } from '@playwright/test';

test(`Verifies that the page title is 'Example Domain'`, { tag: ['@Smoke'] }, async ({ page }) => {
  const app = new App(page);
  await app.homePage.open();
  await app.homePage.expectLoaded()
});