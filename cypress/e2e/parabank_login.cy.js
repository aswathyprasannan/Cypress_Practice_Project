
describe('Test suite for Login feature', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  })

  it('Should Validate empty form submission', function () {

    cy.get(':nth-child(5) > .button').click();
    cy.get('.error').should('have.text', 'Please enter a username and password.');
    cy.screenshot('EmptyFormSubmission');
  });

  it('should check the user can login using username only', function () {

    cy.fixture('login_users').then((data) => {

      data.invalidUser.forEach((usernameal) => {
        cy.get(':nth-child(2) > .input').type(usernameal.username);
        cy.get(':nth-child(5) > .button').click();
        cy.get('.error').should('have.text', 'Please enter a username and password.');
        cy.url().should('include', '/login');
        cy.screenshot('LoginUsingUsernameOnly');
      });
    });
  });

  it('should check the user can login using password only', function () {
    cy.fixture('login_users').then((data) => {

      data.invalidpassword.forEach((passwordonly) => {
        cy.get(':nth-child(4) > .input').type(passwordonly.password);
        cy.get(':nth-child(5) > .button').click();
        cy.get('.error').should('have.text', 'Please enter a username and password.');
        cy.url().should('include', '/login');
        cy.screenshot('LoginUsingPasswordOnly');
      });
    });
  });

  
  it('should Verify the UI elements of login page', function () {

    cy.get('h2').should('have.text', 'Customer Login');
    cy.get('h2').should('be.visible');
    cy.get(':nth-child(1) > b').should('have.text', 'Username');
    cy.get(':nth-child(2) > .input').should('be.enabled');
    cy.get(':nth-child(3) > b').should('have.text', 'Password');
    cy.get(':nth-child(4) > .input').should('be.enabled');
    cy.get(':nth-child(5) > .button').should('be.visible');
    cy.get('#loginPanel > :nth-child(2) > a').should('have.text', 'Forgot login info?');
    cy.screenshot('LoginPageUIElements');
  });

  it('should check the user can login using valid credentials', function () {
    const myRandomValue = Math.floor(Math.random() * 10000); 
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.userRegistration(myRandomValue).then(() => {
    cy.login_users();  // Login with the same credentials
    });
  })
});
