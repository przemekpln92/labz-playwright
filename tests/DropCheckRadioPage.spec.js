const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageobjects/POManager')

test('Check All Dropdown Options', async ({page})=>
{   
    const poManager = new POManager(page);
    const dropCheckRadioPage = poManager.getDropCheckRadioPage()
    await dropCheckRadioPage.goTo()
    await dropCheckRadioPage.verifyDropDowns()

}
)

test('Checkbox', async ({page})=>
{   
    const poManager = new POManager(page);
    const dropCheckRadioPage = poManager.getDropCheckRadioPage()
    await dropCheckRadioPage.goTo()
    await dropCheckRadioPage.verifyCheckBox()

}
)

test('Radio', async ({page})=>
{   
    const poManager = new POManager(page);
    const dropCheckRadioPage = poManager.getDropCheckRadioPage()
    await dropCheckRadioPage.goTo()
    await dropCheckRadioPage.verifyRadioButtons()

}
)

