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
    await expect(page.locator("//span[text()='PIM']")).toHaveText('PIM');
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
 
// Partial text
    await page.locator("//button[contains(.,'Add')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")

// AND 
    // await page.locator("//input[@name='firstName' and @placeholder='First Name']").fill("John");
    // await page.locator("//input[@name='lastName']").fill("Wick");  
    // await page.locator("//button[contains(.,'Save')]").click();
    // await expect(page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[2]")).toBeVisible();
   
// OR

    // await page.locator("//input[@placeholder='Middle Name'][@name='middleName']").fill("Pavan")
    // await page.locator(`//input[@placeholder="Last Name"][@name="lastName"]`).fill("kumar")
    // await page.locator("//button[contains(.,'Save')]").click();
    // await expect(page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[2]")).toBeVisible();


// starts-with
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
    // await page.locator("//input[starts-with(@class,'oxd-input oxd-input--active orangehrm-firstname')]").fill("Steve");
    // await page.locator("//input[starts-with(@class,'oxd-input oxd-input--active orangehrm-middlename')]").fill("J");
    // await page.locator("//input[starts-with(@class,'oxd-input oxd-input--active orangehrm-lastname')]").fill("Smith");
    // await page.locator("//button[@type='submit']").click();
    // await expect(page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[2]")).toBeVisible();

// Ends-with
 
// contains
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    // await expect(page.locator(" //h5[contains(@class,'e')]")).toHaveText('Employee Information');

// Index
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    // await page.locator(" //*[@class='oxd-grid-item oxd-grid-item--gutters'][1]").isVisible();

// normalize space
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // await expect(page.locator("//p[normalize-space()='Forgot your password?']")).toHaveText('Forgot your password?');

    
})
