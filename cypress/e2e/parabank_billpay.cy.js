import BillPayPage from '../pages/billpay_page';  
import { fillRegistrationForm, loginUsers } from '../pages/register_page'; 

describe('Test suite for Bill Pay Page', () => {
  const billPayPage = new BillPayPage();
  beforeEach(() => {
    const myRandomValue = Math.floor(Math.random() * 10000);
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.userRegistration(myRandomValue).then(() => {
      cy.login_users();
    });
  });

  it('Should be able to verify the validation messages displaying on empty submission', () => {
    billPayPage.visitBillPaymentPage();
    billPayPage.submitEmptyBillPaymentForm();
    billPayPage.verifyValidationMessages();
  });

  it('Should be able to verify payment', () => {
    billPayPage.visitBillPaymentPage();
    billPayPage.fillBillPaymentForm();
  });

  it('Should be able to add payment details', () => {
    billPayPage.visitBillPaymentPage();
    billPayPage.addPaymentDetails();
  });
});
