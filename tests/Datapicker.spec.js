const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageobjects/POManager')

test.only('Date', async ({page})=>
{   
    const poManager = new POManager(page);
    const datapickerPage = poManager.getDatapickerPage()
    await datapickerPage.goTo()
    await datapickerPage.verifyDate()

}
)