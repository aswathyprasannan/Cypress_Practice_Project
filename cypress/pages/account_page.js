class AccountPage {
    visitRegistrationPage() {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
  
    registerUser(myRandomValue) {
      cy.userRegistration(myRandomValue).then(() => {
        cy.login_users();
      });
    }
  
    openAccount() {
      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#fromAccountId').select(0);  
      cy.get('form > div > .button').click();
      cy.get('#openAccountResult > .title').click();
      cy.get('#openAccountResult > .title').should('have.text', 'Account Opened!');
      cy.get('#openAccountResult > :nth-child(2)').click();
      cy.get('#openAccountResult > :nth-child(2)').should('have.text', 'Congratulations, your account is now open.');
      cy.get('#newAccountId').click();
    }
  
    verifyAccountDetails() {
      cy.get('#accountDetails > .title').click();
      cy.get('#accountDetails > .title').should('have.text', 'Account Details');
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').should('have.text', 'Transaction');
      cy.get('thead > tr > :nth-child(3)').click();
      cy.get('thead > tr > :nth-child(3)').should('have.text', 'Debit (-)');
    }
  
    verifyCheckingAccountType() {
      cy.get('#accountType').click();
      cy.get('#accountType').should('have.text', 'CHECKING');
    }
  }
  
  export default new AccountPage();
  