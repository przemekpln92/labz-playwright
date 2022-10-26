const {ContactUsPage} = require('./ContactUsPage');
const {DropCheckRadioPage} = require('./DropCheckRadioPage');
const {DatapickerPage} = require('./DatapickerPage');
const {AutocompletePage} = require('./AutocompletePage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.contactUsPage = new ContactUsPage(this.page);
    this.dropCheckRadioPage = new DropCheckRadioPage(this.page);
    this.datapickerPage = new DatapickerPage(this.page);
    this.autocompletePage = new AutocompletePage(this.page);

}

getContactUsPage()
{
    return this.contactUsPage;
}

getDropCheckRadioPage()
{
    return this.dropCheckRadioPage;
}

getDatapickerPage()
{
    return this.datapickerPage;
}

getAutocompletePage()
{
    return this.autocompletePage;
}

}
module.exports = {POManager};