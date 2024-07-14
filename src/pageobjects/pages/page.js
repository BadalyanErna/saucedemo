class Page {
    open(path = '') {
        const baseUrl = 'https://www.saucedemo.com';
        browser.maximizeWindow();
        browser.url(baseUrl + path);
    }
}

module.exports = Page;
