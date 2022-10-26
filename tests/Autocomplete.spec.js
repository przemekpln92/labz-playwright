const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageobjects/POManager')

test('Autocomplete', async ({page})=>
{   
    const poManager = new POManager(page);
    const autocompletePage = poManager.getAutocompletePage()
    await autocompletePage.goTo()
    await autocompletePage.typeAndChoose('chi')

}
)