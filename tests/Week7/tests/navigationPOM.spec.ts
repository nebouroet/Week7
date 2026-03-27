import { test } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';

test.describe('Navigation with POM', () => {
  
    let navPage: NavigationPage;

    test.beforeEach(async ({ page }) => {

        navPage = new NavigationPage(page);
    await page.goto('/');
  });

  test('Apparel', async () => {
    await navPage.clickApparel();
  });

  test('Makeup', async () => {
    await navPage.clickMakeup();
  });

  test('Skincare', async () => {
    await navPage.clickSkincare();
  });

    test('Fragrance', async () => {
    await navPage.clickFragrance();
  });

    test('Men', async () => {
    await navPage.clickMen();
  });

    test('Hair Care', async () => {
    await navPage.clickHaircare();
  });   

    test('Books', async () => {
        await navPage.clickBooks();
    })
})  
