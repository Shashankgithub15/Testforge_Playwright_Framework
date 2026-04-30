import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartBtn: Locator;
  readonly removeBtn: Locator;
  readonly cartIcon: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
    this.removeBtn = page.locator('#remove-sauce-labs-backpack');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addItemToCart() {
    await this.addToCartBtn.click();
  }

  async removeItemFromCart() {
    await this.removeBtn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async getCartCount() {
    return this.cartBadge.textContent();
  }
}