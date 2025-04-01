describe('Test suite for forgot password feature', () => 
    {
      beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      }) 
        
      it('Should Validate empty form submission', function() 
      {
       
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get('.title').should('have.text', 'Customer Lookup');
        cy.get('#rightPanel > p').should('have.text', 'Please fill out the following information in order to validate your account.');
        cy.get('[colspan="2"] > .button').click();
        cy.get('#firstName\\.errors').should('have.text', 'First name is required.');
        cy.get('#lastName\\.errors').should('have.text', 'Last name is required.');
        cy.get('#address\\.street\\.errors').should('have.text', 'Address is required.');
        cy.get('#address\\.city\\.errors').should('have.text', 'City is required.');
        cy.get('#address\\.state\\.errors').should('have.text', 'State is required.');
        cy.get('#address\\.zipCode\\.errors').should('have.text', 'Zip Code is required.');
        cy.get('#ssn\\.errors').should('have.text', 'Social Security Number is required.');
        cy.screenshot('EmptyFormSubmission');
      });
      it('Should Provide invalid customer informations to validate the account', function() 
      {
        cy.fixture('forgotpassword_users').then((data) => {

          data.invaliddetails.forEach((user) => {
        //cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get('#firstName').type(user.firstname);
        cy.get('#lastName').type(user.lastname);
        cy.get('#address\\.street').type(user.address);
        cy.get('#address\\.city').type(user.city);
        cy.get('#address\\.state').type(user.state);
        cy.get('#address\\.zipCode').type(user.zip);
        cy.get('#ssn').type(user.ssn);
        cy.get('[colspan="2"] > .button').click();
        cy.get('.error').should('have.text', 'The customer information provided could not be found.');
        cy.get('.error').should('be.visible');
        cy.screenshot('InvalidCustomerInformations');
          });
        });
      });
      it('Should Provide valid customer informations to validate the account', function() 
      {
        let myRandomValue = Math.floor(Math.random() * 10000); // Common random value for entire execution
        cy.userRegistration(myRandomValue); // used in registation
        cy.fixture('register_users').then((data) => {
        data.validregister.forEach((user) => {

        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get('#firstName').type(user.firstname+myRandomValue);
        cy.get('#lastName').type(user.lastname+myRandomValue);
        cy.get('#address\\.street').type(user.street+myRandomValue);
        cy.get('#address\\.city').type(user.city+myRandomValue);
        cy.get('#address\\.state').type(user.state+myRandomValue);
        cy.get('#address\\.zipCode').type(user.zip+myRandomValue);
        cy.get('#ssn').type(user.ssn+myRandomValue);
        cy.get('[colspan="2"] > .button').click();
        cy.get('.title').should('have.text', 'Customer Lookup');
        cy.get('#rightPanel > :nth-child(2)').should('have.text', 'Your login information was located successfully. You are now logged in. ');
        cy.get('#rightPanel > :nth-child(3) > :nth-child(1)').should('have.text', 'Username');
        cy.get('#leftPanel > ul > :nth-child(8) > a').click();
       
      });
      it('Should Verify the UI elements of contact us form', function() 
      {
      
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get(':nth-child(1) > [align="right"] > b').click();
        cy.get(':nth-child(1) > [align="right"] > b').should('have.text', 'First Name:');
        cy.get(':nth-child(2) > [align="right"] > b').should('have.text', 'Last Name:');
        cy.get(':nth-child(3) > [align="right"] > b').should('have.text', 'Address:');
        cy.get(':nth-child(6) > [align="right"] > b').should('have.text', 'Zip Code:');
        cy.get(':nth-child(7) > [align="right"] > b').should('have.text', 'SSN:');
        cy.get('[colspan="2"] > .button').should('be.enabled');
        cy.get('[colspan="2"] > .button').should('be.visible');
        cy.get('.title').should('have.text', 'Customer Lookup');
       
        cy.get('body').click();
        cy.get('#rightPanel > p').should('have.text', 'Please fill out the following information in order to validate your account.');
        
      });
    });
  });
     
    });