const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Tests', () => {

  test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.waitForSelector('.inventory_list');
    const inventoryHeader = await page.locator('.title').innerText();
    expect(inventoryHeader).toBe('Products');
  });

  test('Add item to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list');

    await page.click('.inventory_item button');

    const cartBadge = await page.locator('.shopping_cart_badge').innerText();
    expect(cartBadge).toBe('1');
  });

});


