import { 
  verifyEmptyFormSubmission, 
  verifyInvalidCustomerInformation, 
  verifyValidCustomerInformation, 
  verifyUIElements 
} from '../pages/forgotpassword_page'; 
import { fillRegistrationForm, fillMismatchedPasswordForm, submitEmptyForm } from '../pages/register_page';

describe('Test suite for forgot password feature', () => {

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  })

  it('Should Validate empty form submission', () => {
    verifyEmptyFormSubmission(); 
    cy.screenshot('EmptyFormSubmission');
  });

  it('Should Provide invalid customer informations to validate the account', () => {
    cy.fixture('forgotpassword_users').then((data) => {
      data.invaliddetails.forEach((user) => {
        verifyInvalidCustomerInformation(user); 
        cy.screenshot('InvalidCustomerInformations');
      });
    });
  });

it('Should Register and Save User Details', () => {
  cy.fixture('register_users').then((data) => {
      const user = data.validregister[0];  // Get the first user from the fixture

      const randomUsername = 'user' + Math.floor(Math.random() * 10000);
      const randomPassword = 'password' + Math.floor(Math.random() * 10000);

      // Register the user
      fillRegistrationForm({
          ...user,
          username: randomUsername,
          password: randomPassword
      });

      // Save all user details to use later
      cy.writeFile('cypress/fixtures/storedUser.json', {
          firstname: user.firstname,
          lastname: user.lastname,
          street: user.street,
          city: user.city,
          state: user.state,
          zip: user.zip,
          ssn: user.ssn,
          username: randomUsername,
          password: randomPassword
      }).then(() => {
          cy.log('User details saved to storedUser.json');
      });
  });
});

it('Should Allow User to Reset Password Using Registered Info', () => {
 cy.readFile('cypress/fixtures/storedUser.json').then((user) => {
      cy.log('User details loaded:', user); 

      cy.contains('a', 'Forgot login info?').click(); 
      cy.get('#firstName').type(user.firstname).should('have.value', user.firstname); 
      cy.get('#lastName').type(user.lastname).should('have.value', user.lastname);  
      cy.get('#address\\.street').type(user.street).should('have.value', user.street); 
      cy.get('#address\\.city').type(user.city).should('have.value', user.city);      
      cy.get('#address\\.state').type(user.state).should('have.value', user.state);   
      cy.get('#address\\.zipCode').type(user.zip).should('have.value', user.zip);     
      cy.get('#ssn').type(user.ssn).should('have.value', user.ssn);                  
      cy.get('input.button[value="Find My Login Info"]').click(); 
  });
});

  // it('Should Provide valid customer informations to validate the account', () => {
  //   cy.fixture('register_users').then((data) => {
  //     data.validregister.forEach((user) => {
  //       fillRegistrationForm(user); 

  //       verifyValidCustomerInformation(user); 
  //     });
  //   });
  // });

  it('Should Verify the UI elements of contact us form', () => {
    verifyUIElements(); 
});
});
