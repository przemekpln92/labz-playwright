const {expect} = require('@playwright/test')

class AutocompletePage {

constructor(page)

{
    this.page = page;
    this.textBox = page.locator('input[id="myInput"]');
    this.autocomplete = page.locator('div[id="myInputautocomplete-list"]');

}

async goTo()
{
    await this.page.goto("https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html");
}

async typeAndChoose(word)
{
    await this.textBox.click()
    await this.textBox.type(word)
    await this.autocomplete.locator('div').nth(0).click()
    
}

}

module.exports = {AutocompletePage};