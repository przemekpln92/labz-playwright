const {ContactUsPage} = require('./ContactUsPage');
const {DropCheckRadioPage} = require('./DropCheckRadioPage');
const {DatapickerPage} = require('./DatapickerPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.contactUsPage = new ContactUsPage(this.page);
    this.dropCheckRadioPage = new DropCheckRadioPage(this.page);
    this.datapickerPage = new DatapickerPage(this.page);

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

}
module.exports = {POManager};