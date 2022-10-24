const {ContactUsPage} = require('./ContactUsPage');
const {DropCheckRadioPage} = require('./DropCheckRadioPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.contactUsPage = new ContactUsPage(this.page);
    this.dropCheckRadioPage = new DropCheckRadioPage(this.page);

}

getContactUsPage()
{
    return this.contactUsPage;
}

getDropCheckRadioPage()
{
    return this.dropCheckRadioPage;
}

}
module.exports = {POManager};