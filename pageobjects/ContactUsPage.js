const {expect} = require('@playwright/test')

class ContactUsPage {

constructor(page)

{
    this.page = page;
    this.resetButton = page.locator('input[type="reset"]')
    this.submitButton = page.locator('input[type="submit"]')
    this.firstName = page.locator('[name="first_name"]')   
    this.lastName = page.locator('[name="last_name"]')     
    this.emailAddress = page.locator('[name="email"]')  
    this.comments = page.locator('[name="message"]')
}

async goTo()
{
    await this.page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
}

async fillTheForm(firstName, lastName, emailAddress, comments)
{
    if (firstName) {
        await this.firstName.type(firstName)
    }
    if (lastName) {
        await this.lastName.type(lastName)
    }
    if (emailAddress) {
        await this.emailAddress.type(emailAddress)
    }
    if (comments) {
        await this.comments.type(comments)
    }
}

async fillAndSendForm(firstName, lastName, emailAddress, comments)
{
    await this.fillTheForm(firstName, lastName, emailAddress, comments);
    await this.submitButton.click()

}

async fillFormAndReset(firstName, lastName, emailAddress, comments)
{
    await this.fillTheForm(firstName, lastName, emailAddress, comments);
    await this.resetButton.click()

}

async verifyFormPlaceHolders()
{
    await expect(this.firstName).toBeEmpty()
    await expect(this.lastName).toBeEmpty()
    await expect(this.emailAddress).toBeEmpty()
    await expect(this.comments).toBeEmpty()

}

}

module.exports = {ContactUsPage};