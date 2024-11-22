describe('Test suite', () => 
    {
      beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      }) 
        


it('should verify that all titles are displayed on the home page.', function() 
{
  cy.get('.Solutions').should('have.text', 'Solutions');
  cy.get('.Solutions').should('be.visible');
  cy.get('.leftmenu > :nth-child(2) > a').should('have.text', 'About Us');
  cy.get('.leftmenu > :nth-child(2) > a').should('be.visible');
  cy.get('.leftmenu > :nth-child(3) > a').should('have.text', 'Services');
  cy.get('.leftmenu > :nth-child(3) > a').should('be.visible');
  cy.get('.leftmenu > :nth-child(4) > a').should('have.text', 'Products');
  cy.get('.leftmenu > :nth-child(4) > a').should('be.visible');
  cy.get('.leftmenu > :nth-child(5) > a').should('have.text', 'Locations');
  cy.get('.leftmenu > :nth-child(5) > a').should('be.visible');
  cy.get('.leftmenu > :nth-child(6) > a').should('have.text', 'Admin Page');
  cy.get('.leftmenu > :nth-child(6) > a').should('be.visible');
  cy.get('h2').should('have.text', 'Customer Login');
  cy.get('h2').should('be.visible');
  cy.get(':nth-child(1) > b').should('have.text', 'Username');
  cy.get(':nth-child(1) > b').should('be.visible');
  cy.get(':nth-child(2) > .input').should('be.visible');
  cy.get(':nth-child(4) > .input').should('be.visible');
  cy.get(':nth-child(5) > .button').should('be.visible');
  cy.get('#loginPanel > :nth-child(2) > a').should('have.text', 'Forgot login info?');
  cy.get('#loginPanel > :nth-child(2) > a').should('be.visible');
  cy.get('#loginPanel > :nth-child(3) > a').should('have.text', 'Register');
  cy.get('#loginPanel > :nth-child(3) > a').should('be.visible');
  cy.get('#footerPanel > :nth-child(1) > :nth-child(1) > a').should('be.visible');
  cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').should('be.visible');
  cy.get('#footerPanel > :nth-child(1) > :nth-child(3) > a').should('be.visible');
  cy.get('#footerPanel > :nth-child(1) > :nth-child(4) > a').should('be.visible');
  cy.get('#footerPanel > :nth-child(1) > :nth-child(5) > a').should('be.visible');
  cy.get('#footerPanel > :nth-child(1) > :nth-child(6) > a').should('be.visible');
  cy.get(':nth-child(1) > :nth-child(7) > a').should('be.visible');
  cy.get(':nth-child(8)').should('be.visible');
  
});
    })