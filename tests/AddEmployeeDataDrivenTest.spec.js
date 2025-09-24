 import { test, expect } from '@playwright/test';
 import data from '../testdata/dataset.json'
 
let AddEmployees ={
   emp1: 
   {
      "First_name ": "pavan",
      "Middle_name": "kumar",
      "Last_name": "S",
      "Employee Id": 12345
   },
   emp2: {
      "First_name ": "prudvi",
      "Middle_name": "",
      "Last name " : "S",
      "Employee Id": 67890
   }
}

for(let employee in AddEmployees){
test(`Add employee With Data Driven Testcases - ${employee}`, async ({ page }) =>{
   
   //LOGIN
   
   // url
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   //username
   await page.locator("input[name='username']").fill(data.Username)
   //passcode
   await page.locator("input[type='password']").fill(data.Password);
   //submit
   await page.locator("//button[@type='submit']").click()
   //check navigation to dashboard
   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
   
   
   //check PIM text

   await expect(page.locator("//span[text()='PIM']")).toHaveText('PIM');
   // click PIM
   await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]").click()
   // check pim url navigation
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
 
 
   // check add text
   await expect(page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[3]")).toHaveText('Add');
   // click add button
   await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[3]").click();
   // check addemployee navigation
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")

   // fill the details
   await page.locator("input[name='firstName']").fill(data['First_name '])
   await page.locator("input.oxd-input.oxd-input--active.orangehrm-middlename").fill(data.Middle_name)
   await page.locator("input[placeholder='Last Name']").fill(data.Last_name)
   await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data['Employee Id'])
   await page.locator("button[type='submit']").click()
   
   // check full name is visible after creating employee
   await expect(page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]")).toBeVisible()
   await expect(page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[2]")).toBeVisible();
   
   // Employee list
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
   await expect(page.locator("(//div[@role='row'])[1]")).toBeVisible();

})


}