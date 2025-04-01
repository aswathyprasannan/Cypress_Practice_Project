import * as XLSX from 'xlsx';


Cypress.Commands.add('readExcel', (filePath) => {
    cy.readFile(filePath, 'binary').then((fileContent) => {
      // Convert binary data to a workbook
      const workbook = XLSX.read(fileContent, { type: 'binary' });
  
      // Access the first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
  
      // Convert sheet data to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
      // Return the parsed JSON data
      return jsonData;
    });
  });


function readExcelFile(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    return jsonData;
}


Cypress.Commands.add('userRegistration', (myRandomValue) => {
    const randomUsername = 'user' + myRandomValue;
    const randomPassword = 'password' + myRandomValue;


    // Store the random credentials in Cypress.env
  Cypress.env('randomUsername', randomUsername);
  Cypress.env('randomPassword', randomPassword);

    return cy.fixture('register_users').then((data) => {
        data.validregister.forEach((user) => {
            const randomFirstName = user.firstname+ ""+ myRandomValue;
            const randomLastName = user.lastname+ ""+ myRandomValue;      
            // Use dynamically generated random username and password
            cy.get('#customer\\.firstName').type(randomFirstName);
            cy.get('#customer\\.lastName').type(randomLastName);
            cy.get('#customer\\.address\\.street').type(user.street+ ""+ myRandomValue);
            cy.get('#customer\\.address\\.city').type(user.city+ ""+ myRandomValue);
            cy.get('#customer\\.address\\.state').type(user.state+ ""+ myRandomValue);
            cy.get('#customer\\.address\\.zipCode').type(user.zip+ ""+ myRandomValue);
            cy.get('#customer\\.phoneNumber').type(user.phone+ ""+ myRandomValue);
            cy.get('#customer\\.ssn').type(user.ssn+ ""+ myRandomValue);
            cy.get('#customer\\.username').type(randomUsername); // Use random username
            cy.get('#customer\\.password').type(randomPassword); // Use random password
            cy.get('#repeatedPassword').type(randomPassword); // Use the same random password for repeat
            cy.get('[colspan="2"] > .button').click();
            cy.wait(1000);
            cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
            cy.get('.smallText').should('have.text', 'Welcome ' +randomFirstName+ ' ' + randomLastName);
            cy.get('#leftPanel > ul > :nth-child(8) > a').should('have.text', 'Log Out');
            cy.get('#leftPanel > ul > :nth-child(7) > a').should('have.text', 'Request Loan');
            cy.get('#leftPanel > ul > :nth-child(6) > a').should('have.text', 'Update Contact Info');
            cy.get('#leftPanel > ul > :nth-child(5) > a').should('have.text', 'Find Transactions');
            cy.get('#leftPanel > ul > :nth-child(4) > a').should('have.text', 'Bill Pay');
            cy.get('#leftPanel > ul > :nth-child(3) > a').should('have.text', 'Transfer Funds');
            cy.get('#leftPanel > ul > :nth-child(2) > a').should('have.text', 'Accounts Overview');
            cy.get('#leftPanel > ul > :nth-child(1) > a').should('have.text', 'Open New Account');
            cy.screenshot('ValidateUserRegistrationHomepage');

            cy.contains('a', 'Log Out').click();
           
        });
    });
})

  
Cypress.Commands.add('login_users', () => {
    const randomUsername = Cypress.env('randomUsername');  // Retrieve the username from Cypress.env
    const randomPassword = Cypress.env('randomPassword');  // Retrieve the password from Cypress.env
  
    // Log the credentials to confirm
    cy.log(`Logging in with Username: ${randomUsername}`);
    cy.log(`Logging in with Password: ${randomPassword}`);
  
    // Use the stored credentials to log in
    cy.get('input[name="username"]').type(randomUsername);  
    cy.get('input[name="password"]').type(randomPassword); 
    cy.get(':nth-child(5) > .button').click();  
    cy.contains('b', 'Welcome').should('be.visible');
    cy.screenshot('LoginWithValidCredentials');
  });
  