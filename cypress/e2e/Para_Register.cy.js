
describe('Test suite', () => 
    {
      beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      }) 
        


it('Should display the validation messages on empty submission ', function() 
{
 
  cy.get(':nth-child(1) > [align="right"] > b').should('have.text', 'First Name:');
  cy.get(':nth-child(2) > [align="right"] > b').should('have.text', 'Last Name:');
  cy.get(':nth-child(3) > [align="right"] > b').should('have.text', 'Address:');
  cy.get(':nth-child(4) > [align="right"] > b').should('have.text', 'City:');
  cy.get(':nth-child(5) > [align="right"] > b').should('have.text', 'State:');
  cy.get(':nth-child(6) > [align="right"] > b').should('have.text', 'Zip Code:');
  cy.get(':nth-child(7) > [align="right"] > b').should('have.text', 'Phone #:');
  cy.get(':nth-child(8) > [align="right"] > b').should('have.text', 'SSN:');
  cy.get(':nth-child(10) > [align="right"] > b').should('have.text', 'Username:');
  cy.get(':nth-child(11) > [align="right"] > b').should('have.text', 'Password:');
  cy.get(':nth-child(12) > [align="right"] > b').should('have.text', 'Confirm:');
  cy.get('[colspan="2"] > .button').should('be.visible');
  cy.get('[colspan="2"] > .button').click();
  cy.get('#customer\\.firstName\\.errors').should('have.text', 'First name is required.');
  cy.get('#customer\\.lastName\\.errors').should('have.text', 'Last name is required.');
  cy.get('#customer\\.address\\.street\\.errors').should('have.text', 'Address is required.');
  cy.get('#customer\\.address\\.state\\.errors').should('have.text', 'State is required.');
  cy.get('#customer\\.address\\.zipCode\\.errors').should('have.text', 'Zip Code is required.');
  cy.get('#customer\\.ssn\\.errors').should('have.text', 'Social Security Number is required.');
  cy.get('#customer\\.username\\.errors').should('have.text', 'Username is required.');
  cy.get('#customer\\.password\\.errors').should('have.text', 'Password is required.');
  cy.get('#repeatedPassword\\.errors').should('have.text', 'Password confirmation is required.');

});
it('should display validation messages when the password and confirm password fields are mismatched.', function() 
{

  cy.get('#customer\\.firstName').clear('J');
  cy.get('#customer\\.firstName').type('Janet');
  cy.get('.form2').click();
  cy.get('#customer\\.lastName').clear('J');
  cy.get('#customer\\.lastName').type('James John');
  cy.get('#customer\\.address\\.street').clear('S');
  cy.get('#customer\\.address\\.street').type('Street 1, near church road');
  cy.get('#customer\\.address\\.city').clear('L');
  cy.get('#customer\\.address\\.city').type('Leeds');
  cy.get('#customer\\.address\\.state').clear('Y');
  cy.get('#customer\\.address\\.state').type('York');
  cy.get('#customer\\.address\\.zipCode').clear('L');
  cy.get('#customer\\.address\\.zipCode').type('Ls25 647');
  cy.get('#customer\\.phoneNumber').clear('1');
  cy.get('#customer\\.phoneNumber').type('1245678901');
  cy.get('#customer\\.ssn').clear('4');
  cy.get('#customer\\.ssn').type('454666');
  cy.get('#customer\\.username').clear('J');
  cy.get('#customer\\.username').type('Janet');
  cy.get('#customer\\.password').clear('J');
  cy.get('#customer\\.password').type('Janet');
  cy.get('#repeatedPassword').clear('J');
  cy.get('#repeatedPassword').type('James');
  cy.get('[colspan="2"] > .button').click();
  cy.get('#repeatedPassword\\.errors').should('have.text', 'Passwords did not match.');
 
});
it('Should display the validtion message when registering by leaving firstname empty', function() 
{
 
  cy.get('#customer\\.lastName').clear('test lastname');
  cy.get('#customer\\.lastName').type('test lastname');
  cy.get('#customer\\.address\\.street').clear('Test address');
  cy.get('#customer\\.address\\.street').type('Test address');
  cy.get('#customer\\.address\\.city').clear('Test city');
  cy.get('#customer\\.address\\.city').type('Test city');
  cy.get('#customer\\.address\\.state').clear('Test state');
  cy.get('#customer\\.address\\.state').type('Test state');
  cy.get('.form2').click();
  cy.get(':nth-child(6) > [width="20%"]').click();
  cy.get('#customer\\.address\\.zipCode').clear('so12 45f');
  cy.get('#customer\\.address\\.zipCode').type('so12 45f');
  cy.get('#customer\\.phoneNumber').clear('1');
  cy.get('#customer\\.phoneNumber').type('124567890');
  cy.get('#customer\\.ssn').clear('128789');
  cy.get('#customer\\.ssn').type('128789');
  cy.get('.form2').click();
  cy.get('#customer\\.username').clear('j');
  cy.get('#customer\\.username').type('janet');
  cy.get('.form2').click();
  cy.get('#customer\\.password').clear('j');
  cy.get('#customer\\.password').type('janet');
  cy.get('#repeatedPassword').clear('j');
  cy.get('#repeatedPassword').type('janet');
  cy.get('[colspan="2"] > .button').click();
  cy.get('#customer\\.firstName\\.errors').should('have.text', 'First name is required.');
 
});

it('Should allow the user to register successfully', function() 
{
  
  cy.get('#customer\\.firstName').clear('T');
  cy.get('#customer\\.firstName').type('Tilcy');
  cy.get('#customer\\.lastName').clear('T');
  cy.get('#customer\\.lastName').type('Thomason');
  cy.get(':nth-child(3) > [width="20%"]').click();
  cy.get('#customer\\.address\\.street').clear('Street 1, near church road');
  cy.get('#customer\\.address\\.street').type('Street 1, near church road');
  cy.get('#customer\\.address\\.city').clear('Test city');
  cy.get('#customer\\.address\\.city').type('Test city');
  cy.get('#customer\\.address\\.state').clear('Test state');
  cy.get('#customer\\.address\\.state').type('Test state');
  cy.get(':nth-child(6) > [width="20%"]').click();
  cy.get('#customer\\.address\\.zipCode').clear('Ls25 647');
  cy.get('#customer\\.address\\.zipCode').type('Ls25 647');
  cy.get('#customer\\.phoneNumber').clear('1245678901');
  cy.get('#customer\\.phoneNumber').type('1245678901');
  cy.get('#customer\\.ssn').clear('128789');
  cy.get('#customer\\.ssn').type('128789');
  cy.get('#customer\\.username').clear('T');
  cy.get('#customer\\.username').type('Tilcr'); //change
  cy.get('#customer\\.password').clear('T');
  cy.get('#customer\\.password').type('Tilcr');//change
  cy.get('#repeatedPassword').clear('T');
  cy.get('#repeatedPassword').type('Tilcr');//change
  cy.get('[colspan="2"] > .button').click();
  cy.wait(1000);
  cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
  cy.get('.smallText').should('have.text', 'Welcome Tilcy Thomason');
  cy.get('#leftPanel > ul > :nth-child(8) > a').should('have.text', 'Log Out');
  cy.get('#leftPanel > ul > :nth-child(7) > a').should('have.text', 'Request Loan');
  cy.get('#leftPanel > ul > :nth-child(6) > a').should('have.text', 'Update Contact Info');
  cy.get('#leftPanel > ul > :nth-child(5) > a').should('have.text', 'Find Transactions');
  cy.get('#leftPanel > ul > :nth-child(4) > a').should('have.text', 'Bill Pay');
  cy.get('#leftPanel > ul > :nth-child(3) > a').should('have.text', 'Transfer Funds');
  cy.get('#leftPanel > ul > :nth-child(2) > a').should('have.text', 'Accounts Overview');
  cy.get('#leftPanel > ul > :nth-child(1) > a').should('have.text', 'Open New Account');
 
});

  })

