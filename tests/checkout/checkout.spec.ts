import { test, expect } from '../../fixtures/testfixture';
import user from '../../test-data/users.json';

test.describe('Checkout Feature', () => {

  test('User completes checkout successfully', { tag: `@e2eFlow` }, async ({loginPage, inventoryPage,cartPage,checkoutPage }) => {

    // Step 1: Auto login and Navigating to inventory page directly
    await test.step("Navigating to inventory page", async () => {
      await loginPage.navigateInventoryURL();
    })


    // Step 2: Add item
    await test.step("Adding items to the cart", async () => {
      await inventoryPage.addItemToCart();
    })


    // Step 3: Open cart
    await test.step("Open cart to see added items", async () => {
      await inventoryPage.openCart();
    })


    // Step 4: Checkout
    await test.step("Click on Checkout button", async () => {
      await cartPage.clickCheckout();
    })


    // Step 5: Fill details
    await test.step("Filling the details for Checkout", async () => {
      await checkoutPage.fillDetails(user.validUser.firstname, user.validUser.lastname, user.validUser.zipcode);
      await checkoutPage.continueCheckout();
    })


    // Step 6: Click Fininsh button
    await test.step("Finishing the checkout process", async () => {
      await checkoutPage.finishCheckout();

    })

    // Step 7: Verify success
    await test.step("Verify success", async () => {
      await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
    })

  });

});