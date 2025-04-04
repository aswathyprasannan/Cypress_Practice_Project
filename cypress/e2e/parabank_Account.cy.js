import AccountPage from '../pages/account_page';

describe('Test suite for account creation Page', () => {
  
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
  });

  it('Should be able to create new savings account', () => {
    const myRandomValue = Math.floor(Math.random() * 10000);
    AccountPage.visitRegistrationPage();
    AccountPage.registerUser(myRandomValue);
    AccountPage.openAccount();
    AccountPage.verifyAccountDetails();
    cy.screenshot('newsavingsaccount');
  });

  it('Should be able to create new checking account', () => {
    const myRandomValue = Math.floor(Math.random() * 10000);
    AccountPage.visitRegistrationPage();
    AccountPage.registerUser(myRandomValue);
    AccountPage.openAccount();
    AccountPage.verifyCheckingAccountType();
    cy.screenshot('newcheckingaccount');
  });

});
