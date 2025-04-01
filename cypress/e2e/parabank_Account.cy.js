describe('Test suite for account creation Page', () => 
    {
        beforeEach(()=>{
          cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
        }) 
          
    it('Should be able to create new savings account', () => {
     
      const myRandomValue = Math.floor(Math.random() * 10000); 
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      cy.userRegistration(myRandomValue).then(() => {
      cy.login_users();  
      });

      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#fromAccountId').select(0);   
      cy.get('form > div > .button').click();
      cy.get('#openAccountResult > .title').click();
      cy.get('#openAccountResult > .title').should('have.text', 'Account Opened!');
      cy.get('#openAccountResult > :nth-child(2)').click();
      cy.get('#openAccountResult > :nth-child(2)').should('have.text', 'Congratulations, your account is now open.');
      cy.get('#newAccountId').click();
      cy.get('#accountDetails > .title').click();
      cy.get('#accountDetails > .title').should('have.text', 'Account Details');
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').should('have.text', 'Transaction');
      cy.get('thead > tr > :nth-child(3)').click();
      cy.get('thead > tr > :nth-child(3)').should('have.text', 'Debit (-)');
      cy.screenshot('newsavingsaccount');
    });
  
    it('Should be able to create new checking account', () => {
     
      const myRandomValue = Math.floor(Math.random() * 10000); 
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      cy.userRegistration(myRandomValue).then(() => {
      cy.login_users();  
      });

      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#fromAccountId').select(0);                
      cy.get('form > div > .button').click();
      cy.get('#openAccountResult > .title').click();
      cy.get('#openAccountResult > .title').should('have.text', 'Account Opened!');
      cy.get('#openAccountResult > :nth-child(2)').click();
      cy.get('#openAccountResult > :nth-child(2)').should('have.text', 'Congratulations, your account is now open.');
      cy.get('#newAccountId').click();
      cy.get('#accountType').click();
      cy.get('#accountType').should('have.text', 'CHECKING');
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').should('have.text', 'Transaction');
      cy.screenshot('newcheckingaccount');
    });
  
    });
