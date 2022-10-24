const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageobjects/POManager')

test.only('Check All Dropdown Options', async ({page})=>
{   
    const poManager = new POManager(page);
    const dropCheckRadioPage = poManager.getDropCheckRadioPage()
    await dropCheckRadioPage.goTo()
    await dropCheckRadioPage.verifyDropDowns()

}
)

