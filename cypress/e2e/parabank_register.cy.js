import { fillRegistrationForm, fillMismatchedPasswordForm, submitEmptyForm } from '../pages/register_page';

beforeEach(() => {
  cy.fixture('register_users').as('userData'); 
  cy.visit('https://parabank.parasoft.com/parabank/register.htm');
});

it('Verify the register form UI elements', function () {
  cy.get('.title').should('have.text', 'Signing up is easy!');
  cy.get('#rightPanel > p').should('have.text', 'If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.');
  cy.screenshot('CheckUIElements');
});

it('Should Register without a phone number', function () {
  this.userData.userinfo.forEach((user) => {
    fillRegistrationForm(user); 
    cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
    cy.screenshot('RegisterWithoutPhone'); 
  });
});

it('should display validation messages when the password and confirm password fields are mismatched.', function () {
  this.userData.passwordconfirmnotmatch.forEach((user) => {
    fillMismatchedPasswordForm(user); 

    cy.get('#repeatedPassword\\.errors').should('have.text', 'Passwords did not match.');
    cy.screenshot('PasswordandConfirmPasswordMismatch'); 
  });
});

it('Should Validate empty form submission', function () {
  submitEmptyForm();
  cy.get('#customer\\.firstName\\.errors').should('have.text', 'First name is required.');
  cy.get('#customer\\.lastName\\.errors').should('have.text', 'Last name is required.');
  cy.get('#customer\\.address\\.street\\.errors').should('have.text', 'Address is required.');
  cy.get('#customer\\.address\\.state\\.errors').should('have.text', 'State is required.');
  cy.get('#customer\\.address\\.zipCode\\.errors').should('have.text', 'Zip Code is required.');
  cy.get('#customer\\.ssn\\.errors').should('have.text', 'Social Security Number is required.');
  cy.get('#customer\\.username\\.errors').should('have.text', 'Username is required.');
  cy.get('#customer\\.password\\.errors').should('have.text', 'Password is required.');
  cy.get('#repeatedPassword\\.errors').should('have.text', 'Password confirmation is required.');
  cy.screenshot('EmptyFormSubmission'); 
});
it('Should Register with valid data', function () {
  this.userData.validregister.forEach((user) => {
    fillRegistrationForm(user);

    cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
    cy.screenshot('ValidRegistration'); 
  });
});