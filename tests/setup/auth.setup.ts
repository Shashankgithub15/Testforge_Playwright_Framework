import { test as setup } from '../../fixtures/testfixture';
import user from '../../test-data/users.json';

setup('Login once and save session', async ({ page, loginPage }) => {

  // Step 1: navigating to login page
  await setup.step("Navigating to login page", async () => {
    await loginPage.navigateBaseURL();
  })

  // Step 2: entering username and password and login
  await setup.step("Fill username and password and click login button", async () => {
    await loginPage.login(user.validUser.username, user.validUser.password);
  })
  
  // Step 3: storing the session to use later to apply autologin
  await setup.step("Session storing to use it later", async () => {
    await page.context().storageState({ path: 'test-data/storageState.json' });
  })

});