import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage2';
import { PRODUCTS } from '../data/Products';

for (const product of PRODUCTS) {
  test(`browse to "${product.name}" and verify detail information`, async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.navigate();
    await homePage.clickProduct(product.name);

    await productPage.verifyAllDetails({
      id: product.id,
      name: product.name,
      price: product.price,
      descriptionSnippet: product.descriptionSnippet,
    });
  });
} 