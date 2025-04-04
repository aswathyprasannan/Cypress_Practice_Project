import ContactUsPage from '../pages/contactus_page'; 

describe('Test suite for Contact Us Page', () => {

  const contactUsPage = new ContactUsPage();

  beforeEach(() => {
    contactUsPage.visit(); 
  });

  it('Should be able to get contact us details', () => {
    const name = 'ee';
    const email = 'rrr';
    const phone = 'ffrr';

    contactUsPage.submitForm(name, email, phone); 
  });
});
