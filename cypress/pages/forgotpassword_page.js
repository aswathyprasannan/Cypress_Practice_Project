export function verifyEmptyFormSubmission() {
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
  }
  
  export function verifyInvalidCustomerInformation(data) {

    cy.get('#loginPanel > :nth-child(2) > a').click();
    cy.get('#firstName').type(data.firstname);
    cy.get('#lastName').type(data.lastname);
    cy.get('#address\\.street').type(data.address);
    cy.get('#address\\.city').type(data.city);
    cy.get('#address\\.state').type(data.state);
    cy.get('#address\\.zipCode').type(data.zip);
    cy.get('#ssn').type(data.ssn);
    cy.get('[colspan="2"] > .button').click();
    cy.get('.error').should('have.text', 'The customer information provided could not be found.');
    cy.get('.error').should('be.visible');
  }
  
  export function verifyValidCustomerInformation(data) {
    cy.contains('a', 'Log Out').click();
    cy.get('#loginPanel > :nth-child(2) > a').click();
    cy.wait(3000); // Waits for 3 seconds
    cy.get('#firstName').type(data.firstname);
    cy.get('#lastName').type(data.lastname);
    cy.get('#address\\.street').type(data.street);
    cy.get('#address\\.city').type(data.city);
    cy.get('#address\\.state').type(data.state);
    cy.get('#address\\.zipCode').type(data.zip);
    cy.get('#ssn').type(data.ssn);
    cy.get('[colspan="2"] > .button').click();
    cy.get('.title').should('have.text', 'Customer Lookup');
    cy.get('#rightPanel > :nth-child(2)').should('have.text', 'Your login information was located successfully. You are now logged in. ');
    cy.get('#rightPanel > :nth-child(3) > :nth-child(1)').should('have.text', 'Username');
    cy.get('#leftPanel > ul > :nth-child(8) > a').click();
  }
  
  export function verifyUIElements() {
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
  }
  