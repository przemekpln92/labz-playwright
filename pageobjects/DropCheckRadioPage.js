const {expect} = require('@playwright/test')

class DropCheckRadioPage {

constructor(page)

{
    this.page = page;
    this.firstDrop = page.locator("#dropdowm-menu-1");
    this.secondDrop = page.locator("#dropdowm-menu-2");
    this.thirdDrop = page.locator("#dropdowm-menu-3");
    this.firstDrop = page.locator("#dropdowm-menu-1");
    this.secondDrop = page.locator("#dropdowm-menu-2");
    this.checkOne = page.locator('input[value="option-1"]');
    this.checkTwo = page.locator('input[value="option-2"]');
    this.checkThree = page.locator('input[value="option-3"]');
    this.checkFour = page.locator('input[value="option-4"]');
    this.radioOne = page.locator('input[value="green"]');
    this.radioTwo = page.locator('input[value="blue"]');
    this.radioThree = page.locator('input[value="yellow"]');
    this.radioFour = page.locator('input[value="orange"]');
    this.radioFive = page.locator('input[value="purple"]');
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

async verifyCheckBox()
{

    await this.checkOne.click()
    await this.checkTwo.click()
    await this.checkFour.click()
    await this.checkTwo.click()
    await this.checkFour.click()
    expect(await this.page.isChecked('input[value="option-2"]')).toBeFalsy()
    expect(await this.page.isChecked('input[value="option-4"]')).toBeFalsy()
    
}

async verifyRadioButtons()
{

    await this.radioOne.click()
    expect(await this.page.isChecked('input[value="green"]')).toBeTruthy()
    await this.radioTwo.click()
    expect(await this.page.isChecked('input[value="blue"]')).toBeTruthy()
    await this.radioThree.click()
    expect(await this.page.isChecked('input[value="yellow"]')).toBeTruthy()
    await this.radioFour.click()
    expect(await this.page.isChecked('input[value="orange"]')).toBeTruthy()
    await this.radioFive.click()
    expect(await this.page.isChecked('input[value="purple"]')).toBeTruthy()
    
}

}

module.exports = {DropCheckRadioPage};