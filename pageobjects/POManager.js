const {ContactUsPage} = require('./ContactUsPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.contactUsPage = new ContactUsPage(this.page);

}

getContactUsPage()
{
    return this.contactUsPage;
}

}
module.exports = {POManager};