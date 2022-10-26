const {expect} = require('@playwright/test')

class DatapickerPage {

constructor(page)

{
    this.page = page;
    this.datePick = page.locator('span[class="input-group-addon"]');
    this.dateField = page.locator('input[class="form-control"]');
    this.today = page.locator('td[class="today day"]');
}

async goTo()
{
    await this.page.goto("https://webdriveruniversity.com/Datepicker/index.html");
}

async verifyDate()
{
    let date = new Date()
    let todayDate = date.toISOString().slice(0, 10)
    await this.datePick.click()
    await this.today.click()
    const value = await this.page.$eval('input[class="form-control"]', (el) => el.value);
    expect(value).toEqual(value)
    
}

}

module.exports = {DatapickerPage};