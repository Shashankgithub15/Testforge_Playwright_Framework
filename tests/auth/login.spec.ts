import { test, expect } from '../../fixtures/testfixture';
import user from '../../test-data/users.json';

test.describe('Login Feature', () => {

  test('User logs in successfully with valid credentials', async ({ loginPage, page }) => {
    // Step 1: navigating to login page
    await test.step("Navigating to login page", async () => {
      await loginPage.navigateBaseURL();
    })
    // Step 2: entering username and password and login
    await test.step("Fill username and password and click login button", async () => {
      await loginPage.login(user.validUser.username, user.validUser.password);
    })

    // Step 3: Asserting login functionality
    await test.step("Asserting login functionality", async () => {
      await expect(page).toHaveURL(/inventory/);
    })

  });

  test('User do not log in invalid credentials', async ({ loginPage, page }) => {
    // Step 1: navigating to login page
    await test.step("Navigating to login page", async () => {
      await loginPage.navigateBaseURL();
    })
    // Step 2: entering invalid username and password and login
    await test.step("Fill invalid username and password and click login button", async () => {
      await loginPage.login(user.invalidUser.username, user.invalidUser.password);
    })

    // Step 3: Asserting imvalid login
    await test.step("Asserting login functionality", async () => {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    })


  });

});