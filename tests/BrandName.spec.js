import { test, expect } from '@playwright/test';
test('verify the Brand name visible or not', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');  

  await expect(page.locator('.login_logo')).toBeVisible();
 });

 test('verify the Brand Name', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');  

    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
});
