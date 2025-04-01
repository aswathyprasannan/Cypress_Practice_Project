describe('Test suite for account creation Page', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
  })

  it('Should be able to verify the validation messages displaying on empty submission', () => {

    const myRandomValue = Math.floor(Math.random() * 10000); 
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      cy.userRegistration(myRandomValue).then(() => {
      cy.login_users();  
      });
    cy.get('#leftPanel > ul > :nth-child(4) > a').click();
    cy.get('.button').eq(1).click();
    cy.contains('span', 'Payee name is required.').should('be.visible');
    cy.contains('span', 'Address is required.').should('be.visible');
    cy.contains('span', 'Zip Code is required.').should('be.visible');
    cy.contains('span', 'The amount cannot be empty.').should('be.visible');

  });
  it('Should be able to verify payment', () => {

    const myRandomValue = Math.floor(Math.random() * 10000); 
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      cy.userRegistration(myRandomValue).then(() => {
      cy.login_users();  
      });
    cy.get('#leftPanel > ul > :nth-child(4) > a').click();
    cy.contains('h1', 'Bill Payment Service').should('be.visible');
    cy.contains('p', 'Enter payee information').should('be.visible');
    cy.contains('b', 'Zip Code').should('be.visible');
    cy.contains('b', 'Amount').should('be.visible');
    cy.contains('b', 'From account').should('be.visible');
    cy.get('[name="payee.name"]').click().type('Leela');
    cy.get('.button').eq(1)
      .should('be.visible')
      .should('not.be.disabled')
      .should('have.css', 'background-color', 'rgb(202, 129, 37)')
      .click();
  });

  it('Should be able to add payment details', () => {

    const myRandomValue = Math.floor(Math.random() * 10000); 
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      cy.userRegistration(myRandomValue).then(() => {
      cy.login_users();  
      });
    cy.get('#leftPanel > ul > :nth-child(4) > a').click();
    cy.get('[name="payee.name"]').click().type('Leela');
    cy.get('[name="payee.address.street"]').click().type('1234');
    cy.get('[name="payee.address.city"]').click().type('Dallas');
    cy.get('[name="payee.address.state"]').click().type('TX');
    cy.get('[name="payee.address.zipCode"]').click().type('75001');
    cy.get('[name="payee.phoneNumber"]').click().type('1234567890');
    cy.get('[name="payee.accountNumber"]').click().type('1234567890');
    cy.get('[name="verifyAccount"]').click().type('1234567890');
    cy.get(':nth-child(11) > [width="20%"] > .input').click().type('100');
    cy.get('select[name="fromAccountId"]').then(($select) => {
    const firstValue = $select.find('option').eq(0).text();
    cy.get('select[name="fromAccountId"]').should('have.value', firstValue);
    cy.get('.button').eq(1).click();
    cy.reload(true);

    });

  });

});
