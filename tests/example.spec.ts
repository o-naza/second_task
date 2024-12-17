import { test, expect } from '@playwright/test';

test(`Verifies that the page title is 'Example Domain'`, async ({ page }) => {
  await page.goto('http://example.com/');
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible()
});
