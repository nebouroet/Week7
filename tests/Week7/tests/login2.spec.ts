import { test, expect } from '../fixtures/test-fixtures';
import { LoginPage } from '../pages/LoginPage';



    test('valid login succeeds', async ({ loginPage, page } ) => {
        await loginPage.login('aguspe', '12341234');
        await expect(page).toHaveURL('/index.php?rt=account/account');
    });

    test('invalid login', async ({ loginPage, page } ) => {
        await loginPage.login('invaliduser', 'invalidpassword');
        await expect (page.getByText('Error: Incorrect login or')).toBeVisible()
    });

    test('empty login fields', async ({ loginPage, page }) => {
        await loginPage.login('', '12341234');
        await expect(loginPage.usernameInput).toHaveAttribute('required', '');
        await expect(loginPage.passwordInput).toHaveAttribute('required', ''); 
       });

    test('empty password field', async ({ loginPage, page }) => {
        await loginPage.login('aguspe', '');
        await expect(loginPage.usernameInput).toHaveAttribute('required', '');
        await expect(loginPage.passwordInput).toHaveAttribute('required', ''); 
    })



