import { test, expect } from "@playwright/test";

import dotenv from "dotenv";

// Load environment variables before the tests run
dotenv.config();

test("verify Login with valid credentials", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // basic xpath
    await page.locator("//input[@name='username']").fill(process.env.APP_USERNAME);  

    await page.locator("//input[@name='password']").fill(process.env.APP_PASSWORD);
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    // text based xpath
    // Full text
    await expect(page.locator(`//*[text()="PIM"]`)).toHaveText('PIM');
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
 
    // Partial text
    await page.locator("//button[contains(.,'Add')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
})
