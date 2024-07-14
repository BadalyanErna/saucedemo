const LoginPage = require('../../src/pageobjects/pages/login.page');

describe('Login Form', () => {
    it('should show error messages with empty credentials', async () => {
        await LoginPage.open();

        await LoginPage.setUserName('standard_user');
        await LoginPage.setPassword('password')
        await LoginPage.clearUsernameField();
        await LoginPage.clearPasswordField();
        await LoginPage.clearPasswordField();
        await LoginPage.submit()

        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toEqual("Epic sadface: Username is required")
    });

    it('should show error message when logging in without password', async () => {

        await LoginPage.open();

        await LoginPage.setUserName('standard_user');
        await LoginPage.setPassword('password');
        await LoginPage.clearPasswordField();
        await LoginPage.submit()

        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toEqual('Epic sadface: Password is required');
    });

    it('should login with valid credentials and validate dashboard title', async () => {
        await LoginPage.open();

        await LoginPage.setUserName('standard_user');
        await LoginPage.setPassword('secret_sauce')
        await LoginPage.submit()
        const pageTitle = await LoginPage.getPageTitle();
        expect(pageTitle).toEqual("Swag Labs");
    });


});





