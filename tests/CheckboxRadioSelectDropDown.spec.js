import {test , expect} from "@playwright/test";

 
test("interact with checkbox, radio, and select dropdown", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form"); // sample demo page

  //Checkbox
  const checkbox = page.getByLabel("Hosting"); // locate by label text
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  //Radio button
  const radio = page.getByLabel("Yes"); 
  await radio.check();
  await expect(radio).toBeChecked();

  //Select dropdown
  const stateDropdown = page.locator("select[name='state']");
  await stateDropdown.selectOption("Texas"); 
  await expect(stateDropdown).toHaveValue("Texas");
});
