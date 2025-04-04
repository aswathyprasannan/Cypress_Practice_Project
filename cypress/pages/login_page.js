export class LoginPage {

    navigateToLogin() {
      cy.visit('https://www.saucedemo.com/v1/index.html');
    }
    enterUsername(username) {
      cy.get('[data-test="username"]').type(username);
    }
    enterPassword(password) {
      cy.get('[data-test="password"]').type(password);
    }
 
    clickLoginButton() {
      cy.get('#login-button').click();
    }
  }
  