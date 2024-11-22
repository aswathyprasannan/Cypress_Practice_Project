
describe('Test suite', () => 
    {
      beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      }) 
        

it('Should check empty login is not allowed', function() 
{

  cy.get('h2').click();
  cy.get('h2').should('have.text', 'Customer Login');
  cy.get(':nth-child(1) > b').should('have.text', 'Username');
  cy.get(':nth-child(3) > b').should('have.text', 'Password');
  cy.get('body').click();
  cy.get(':nth-child(5) > .button').click();
  cy.get('.error').should('have.text', 'Please enter a username and password.');
 
});
 it('should check login using username and leaving the password field empty',function()
 {
  
   cy.get(':nth-child(2) > .input').clear();
   cy.get(':nth-child(2) > .input').type('test');
   cy.get(':nth-child(5) > .button').click();
   cy.get('.error').should('have.text', 'Please enter a username and password.');
 
 });
    
 it('should check login using password and leaving the username field empty',function()
 {
 
   cy.get(':nth-child(4) > .input').clear('t');
   cy.get(':nth-child(4) > .input').type('test');
   cy.get(':nth-child(5) > .button').click();
   cy.get('.error').should('have.text', 'Please enter a username and password.');
 
 });
  })

