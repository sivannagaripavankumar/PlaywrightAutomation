import {test, expect} from '@playwright/test';
import data from '../testdata/dataset.json'
test('Verify dashboard', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(data.Username)
    await page.locator("input[type='password']").fill(data.Password);
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
    await expect(page.locator("//h6[contains(@class,'oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')]")).toHaveText('Dashboard');
})

test('Verify dashboard1', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(data.Username)
    await page.locator("input[type='password']").fill(data.Password);
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
    await expect(page.locator("//h6[contains(@class,'oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')]")).toHaveText('Dashboard');
})

 
