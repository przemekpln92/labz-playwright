const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageobjects/POManager')

test.only('Ajax', async ({page})=>
{   
    const poManager = new POManager(page);
    const ajaxLoaderPage = poManager.getAjaxLoader()
    await ajaxLoaderPage.goTo()
    await ajaxLoaderPage.waitAndClick()

}
)