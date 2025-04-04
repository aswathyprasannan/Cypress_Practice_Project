// registerLogic.js

function fillRegistrationForm(user) {
    const randomUsername = 'user' + Math.floor(Math.random() * 10000);
    const randomPassword = 'password' + Math.floor(Math.random() * 10000);

    cy.get('#customer\\.firstName').type(user.firstname);
    cy.get('#customer\\.lastName').type(user.lastname);
    cy.get(':nth-child(3) > [width="20%"]').click(); // click the gender field
    cy.get('#customer\\.address\\.street').type(user.street);
    cy.get('#customer\\.address\\.city').type(user.city);
    cy.get('#customer\\.address\\.state').type(user.state);
    cy.get('#customer\\.address\\.zipCode').type(user.zip);
    cy.get('#customer\\.ssn').type(user.ssn);
    cy.get('#customer\\.username').type(randomUsername);
    cy.get('#customer\\.password').type(randomPassword);
    cy.get('#repeatedPassword').type(randomPassword);
    cy.get('[colspan="2"] > .button').click(); // Submit the form
}

function fillMismatchedPasswordForm(user) {
    cy.get('#customer\\.firstName').type(user.firstname);
    cy.get('#customer\\.lastName').type(user.lastname);
    cy.get(':nth-child(3) > [width="20%"]').click(); // click the gender field
    cy.get('#customer\\.address\\.street').type(user.street);
    cy.get('#customer\\.address\\.city').type(user.city);
    cy.get('#customer\\.address\\.state').type(user.state);
    cy.get('#customer\\.address\\.zipCode').type(user.zip);
    cy.get('#customer\\.ssn').type(user.ssn);
    cy.get('#customer\\.username').type(user.username);
    cy.get('#customer\\.password').type(user.password);
    cy.get('#repeatedPassword').type(user.repeatpassword);
    cy.get('[colspan="2"] > .button').click(); // Submit the form
}

function submitEmptyForm() {
    cy.get('[colspan="2"] > .button').click(); // Submit the empty form
}

export { fillRegistrationForm, fillMismatchedPasswordForm, submitEmptyForm };
