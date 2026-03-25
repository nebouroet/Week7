import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('valid login succeeds', async ({ page }) => {
        await loginPage.login('aguspe', '12341234');
        await expect(page).toHaveURL('/index.php?rt=account/account');
    });

    test('invalid login', async ({ page }) => {
        await loginPage.login('invaliduser', 'invalidpassword');
        await expect (page.getByText('Error: Incorrect login or')).toBeVisible()
    });

    test('empty login fields', async ({ page }) => {
        await loginPage.login('', '12341234');
        await expect(loginPage.usernameInput).toHaveAttribute('required', '');
        await expect(loginPage.passwordInput).toHaveAttribute('required', ''); 
       });

    test('empty password field', async ({ page }) => {
        await loginPage.login('aguspe', '');
        await expect(loginPage.usernameInput).toHaveAttribute('required', '');
        await expect(loginPage.passwordInput).toHaveAttribute('required', ''); 
    })
})


