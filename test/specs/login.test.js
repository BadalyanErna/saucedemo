const LoginPage = require('../../src/pageobjects/pages/login.page');
const credentials = require('../../credentials');
const logger = require('../../logger');

describe('Login Form', () => {
    it('should show error messages with empty credentials', async () => {
        logger.info('Starting test: should show error messages with empty credentials');
        await LoginPage.open();
        logger.info('Opened login page');

        await LoginPage.setUserName(credentials.validCredentials.username);
        logger.info('Set username: ' + credentials.validCredentials.username);

        await LoginPage.setPassword(credentials.validCredentials.password);
        logger.info('Set password: ' + credentials.validCredentials.password);

        await LoginPage.clearUsernameField();
        logger.info('Cleared username field');

        await LoginPage.clearPasswordField();
        logger.info('Cleared password field');

        await LoginPage.submit();
        logger.info('Submitted the login form');

        const errorMessage = await LoginPage.getErrorMessage();
        logger.info('Captured error message: ' + errorMessage);

        await expect(errorMessage).toEqual("Epic sadface: Username is required");
        logger.info('Verified error message');
    });

    it('should show error message when logging in without password', async () => {
        logger.info('Starting test: should show error message when logging in without password');
        await LoginPage.open();
        logger.info('Opened login page');

        await LoginPage.setUserName(credentials.validCredentials.username);
        logger.info('Set username: ' + credentials.validCredentials.username);

        await LoginPage.setPassword(credentials.validCredentials.password);
        logger.info('Set password: ' + credentials.validCredentials.password);

        await LoginPage.clearPasswordField();
        logger.info('Cleared password field');

        await LoginPage.submit();
        logger.info('Submitted the login form');

        const errorMessage = await LoginPage.getErrorMessage();
        logger.info('Captured error message: ' + errorMessage);

        await expect(errorMessage).toEqual('Epic sadface: Password is required');
        logger.info('Verified error message');
    });

    it('should login with valid credentials and validate dashboard title', async () => {
        logger.info('Starting test: should login with valid credentials and validate dashboard title');
        await LoginPage.open();
        logger.info('Opened login page');

        await LoginPage.setUserName(credentials.validCredentials.username);
        logger.info('Set username: ' + credentials.validCredentials.username);

        await LoginPage.setPassword(credentials.validCredentials.password);
        logger.info('Set password: ' + credentials.validCredentials.password);

        await LoginPage.submit();
        logger.info('Submitted the login form');

        const pageTitle = await LoginPage.getPageTitle();
        logger.info('Captured page title: ' + pageTitle);

        expect(pageTitle).toEqual("Swag Labs");
        logger.info('Verified page title');
    });
});
