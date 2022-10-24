const {expect} = require('@playwright/test')

class DropCheckRadioPage {

constructor(page)

{
    this.page = page;
    this.firstDrop = page.locator("#dropdowm-menu-1");
    this.secondDrop = page.locator("#dropdowm-menu-2");
    this.thirdDrop = page.locator("#dropdowm-menu-3");
}

async goTo()
{
    await this.page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
}

async verifyDropDowns()
{

    await expect(this.firstDrop).toHaveText('JAVA C# Python SQL');
    await expect(this.secondDrop).toHaveText('Eclipse Maven TestNG JUnit');
    await expect(this.thirdDrop).toHaveText('HTML CSS JavaScript JQuery');
    
}

}

module.exports = {DropCheckRadioPage};