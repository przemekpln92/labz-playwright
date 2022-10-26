const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageobjects/POManager')

test('Send Form With Correct Data', async ({page})=>
{   
    const poManager = new POManager(page);
    const contactUsPage = poManager.getContactUsPage()
    await contactUsPage.goTo()
    await contactUsPage.fillAndSendForm("Adam", "Kowalski", "abc@abc.pl", "any")
    await expect(page.locator("#contact_reply")).toBeVisible();

}
)

test('Fill Form And Reset', async ({page})=>
{   
    const poManager = new POManager(page);
    const contactUsPage = poManager.getContactUsPage()
    await contactUsPage.goTo()
    await contactUsPage.fillFormAndReset("Adam", "Kowalski", "abc@abc.pl", "any")
    await contactUsPage.verifyFormPlaceHolders()
}
)

test('Send Form With Incomplete Data', async ({page})=>
{   
    const poManager = new POManager(page);
    const contactUsPage = poManager.getContactUsPage()
    await contactUsPage.goTo()
    await contactUsPage.fillAndSendForm("Adam", "Kowalski", "", "any")
    await expect(page.locator('body')).toContainText('Error: all fields are required');
}
)

test('Send Form With Wrong Email', async ({page})=>
{   
    const poManager = new POManager(page);
    const contactUsPage = poManager.getContactUsPage()
    await contactUsPage.goTo()
    await contactUsPage.fillAndSendForm("Adam", "Kowalski", "abcabc.pl", "any")
    await expect(page.locator('body')).toContainText('Error: Invalid email address');
}
)

