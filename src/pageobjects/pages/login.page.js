const Page = require("./page");

class LoginPage extends Page {
    get usernameField() { return $('input[placeholder="Username"'); }
    get passwordField() { return $('input[placeholder="Password"]'); }
    get loginButton() { return $('input[id="login-button"]'); }
    get errorMessage() { return $('.error-message-container h3'); }
    get pageTitle() {
        return $("//div[@class='header_label']/div[text()='Swag Labs']");
    }

    async open() {
        super.open('/');
    }

    async getPageTitle() {
        return await this.pageTitle.getText()
    }
    async setUserName(username) {
        await this.usernameField.setValue(username);
    }

    async setPassword(password) {
        await this.passwordField.setValue(password);
    }

    async submit() {
        await this.loginButton.click()
    }

    async clearUsernameField() {
        await this.usernameField.clearValue();
    }

    async clearPasswordField() {
        await this.passwordField.clearValue();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();

