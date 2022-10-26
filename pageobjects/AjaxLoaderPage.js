const {expect} = require('@playwright/test')

class AjaxLoaderPage {

constructor(page)

{
    this.page = page;
    this.spinner = page.locator('div[id="loader"]');
    this.clickMe = page.locator('span[data-target="#myModalClick"]');

}

async goTo()
{
    await this.page.goto("https://webdriveruniversity.com/Ajax-Loader/index.html");
}

async waitAndClick()
{
    await this.page.waitForSelector('div[id="loader"]', {state: 'hidden'});
    await this.clickMe.click()
    
}

}

module.exports = {AjaxLoaderPage};