import { test, expect } from '../../fixtures/testfixture';
import { InventoryPage } from '../../pages/InventoryPage';
import user from '../../test-data/users.json';

test.describe('Cart Feature', () => {

  test('User adds item to cart successfully', { tag: `@addItemToCart` }, async ({ inventoryPage, loginPage }) => {

    //Navigating to inventroy URL
    await test.step("Navigating to Inventory URL", async () => {
      await loginPage.navigateInventoryURL();
    })


    //Adding item to the cart
    await test.step("Adding item to the cart", async () => {
      await inventoryPage.addItemToCart();
    })

    //Asserting the item is added
    await test.step("Asserting the Addition of item", async () => {
      const count = await inventoryPage.getCartCount();
      await expect(count).toBe('1');
    })

  });

  test('User removes item from cart successfully', { tag: `@removeItemFromCart` }, async ({ inventoryPage, loginPage }) => {

    //Navigating to inventroy URL
    await test.step("Navigating to Inventory URL", async () => {
      await loginPage.navigateInventoryURL();
    })

    //Adding item to the cart to remove it later
    await test.step("Adding items to the cart", async () => {
      await inventoryPage.addItemToCart();
      await expect(inventoryPage.cartBadge).toHaveText('1');
    })


    //Removing item from the cart to check functionality
    await test.step("Removing item from the cart", async () => {
      await inventoryPage.removeItemFromCart();
    })


    //Asserting the removal of item
    await test.step("Asserting the removal of item", async () => {
      await expect(inventoryPage.cartBadge).toHaveCount(0);
    })

  });

});