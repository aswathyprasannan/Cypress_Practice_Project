class ContactUsPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
    }
  
    submitForm(name, email, phone) {
      cy.get(':nth-child(8) > a').click(); // Navigate to Contact Us page
      cy.get('#rightPanel > p').click(); // Click the section
      cy.get('#name').clear().type(name); // Clear and type name
      cy.get('#email').clear().type(email); // Clear and type email
      cy.get('#phone').clear().type(phone); // Clear and type phone
      cy.get('[colspan="2"] > .button').click(); // Submit the form
    }
  }
  
  export default ContactUsPage;
  