import { validateEmptyFormSubmission, loginWithUsernameOnly, loginWithPasswordOnly, verifyLoginUIElements } from '../pages/loginp_page';

describe('Test suite for Login feature', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

  it('Should Validate empty form submission', () => {
    validateEmptyFormSubmission();
    cy.screenshot('EmptyFormSubmission');
  });

  it('should check the user can login using username only', function () {
    cy.fixture('login_users').then((data) => {
      loginWithUsernameOnly(data);
      cy.screenshot('LoginUsingUsernameOnly');
    });
  });

  it('should check the user can login using password only', function () {
    cy.fixture('login_users').then((data) => {
      loginWithPasswordOnly(data);
      cy.screenshot('LoginUsingPasswordOnly');
    });
  });

  it('should Verify the UI elements of login page', () => {
    verifyLoginUIElements();
    cy.screenshot('LoginPageUIElements');
  });

  it('should check the user can login using valid credentials', function () {
    const myRandomValue = Math.floor(Math.random() * 10000);
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.userRegistration(myRandomValue).then(() => {
      cy.login_users();
    });
  });
});

