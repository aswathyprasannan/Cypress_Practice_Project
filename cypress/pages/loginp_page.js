export const validateEmptyFormSubmission = () => {
    cy.get(':nth-child(5) > .button').click();
    cy.get('.error').should('have.text', 'Please enter a username and password.');
  };
  
  export const loginWithUsernameOnly = (data) => {
    data.invalidUser.forEach((usernameal) => {
      cy.get(':nth-child(2) > .input').type(usernameal.username);
      cy.get(':nth-child(5) > .button').click();
      cy.get('.error').should('have.text', 'Please enter a username and password.');
      cy.url().should('include', '/login');
    });
  };
  
  export const loginWithPasswordOnly = (data) => {
    data.invalidpassword.forEach((passwordonly) => {
      cy.get(':nth-child(4) > .input').type(passwordonly.password);
      cy.get(':nth-child(5) > .button').click();
      cy.get('.error').should('have.text', 'Please enter a username and password.');
      cy.url().should('include', '/login');
    });
  };
  
  export const verifyLoginUIElements = () => {
    cy.get('h2').should('have.text', 'Customer Login');
    cy.get('h2').should('be.visible');
    cy.get(':nth-child(1) > b').should('have.text', 'Username');
    cy.get(':nth-child(2) > .input').should('be.enabled');
    cy.get(':nth-child(3) > b').should('have.text', 'Password');
    cy.get(':nth-child(4) > .input').should('be.enabled');
    cy.get(':nth-child(5) > .button').should('be.visible');
    cy.get('#loginPanel > :nth-child(2) > a').should('have.text', 'Forgot login info?');
  };
  