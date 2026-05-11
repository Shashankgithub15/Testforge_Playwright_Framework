import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly usernameInput:Locator;
  readonly passwordInput:Locator;
  readonly loginButton:Locator;

  constructor(private page: Page) {
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button'); 
    
  }

  async navigateBaseURL() {
    await this.page.goto('/');
  }
  async navigateInventoryURL() {
    await this.page.goto('/Inventory.html');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}