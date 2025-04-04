import { LoginPage } from "../pages/login_page";

const loginPage = new LoginPage();

describe('Test suite for login functionality', () => {
  beforeEach(() => {
   
  });

  it('should allow the user to log in successfully', function() {
    loginPage.navigateToLogin();
    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLoginButton();

  
  });
});
