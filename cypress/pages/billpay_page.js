class BillPayPage {
    visitBillPaymentPage() {
      cy.get('#leftPanel > ul > :nth-child(4) > a').click();
    }
  
    submitEmptyBillPaymentForm() {
      cy.get('.button').eq(1).click();
    }
  
    verifyValidationMessages() {
      cy.contains('span', 'Payee name is required.').should('be.visible');
      cy.contains('span', 'Address is required.').should('be.visible');
      cy.contains('span', 'Zip Code is required.').should('be.visible');
      cy.contains('span', 'The amount cannot be empty.').should('be.visible');
    }
  
    fillBillPaymentForm() {
      cy.contains('h1', 'Bill Payment Service').should('be.visible');
      cy.contains('p', 'Enter payee information').should('be.visible');
      cy.contains('b', 'Zip Code').should('be.visible');
      cy.contains('b', 'Amount').should('be.visible');
      cy.contains('b', 'From account').should('be.visible');
  
      // Fill the form fields
      cy.get('[name="payee.name"]').click().type('Leela');
      cy.get('.button').eq(1)
        .should('be.visible')
        .should('not.be.disabled')
        .should('have.css', 'background-color', 'rgb(202, 129, 37)')
        .click();
    }
  
    addPaymentDetails() {
      cy.get('[name="payee.name"]').click().type('Leela');
      cy.get('[name="payee.address.street"]').click().type('1234');
      cy.get('[name="payee.address.city"]').click().type('Dallas');
      cy.get('[name="payee.address.state"]').click().type('TX');
      cy.get('[name="payee.address.zipCode"]').click().type('75001');
      cy.get('[name="payee.phoneNumber"]').click().type('1234567890');
      cy.get('[name="payee.accountNumber"]').click().type('1234567890');
      cy.get('[name="verifyAccount"]').click().type('1234567890');
      cy.get(':nth-child(11) > [width="20%"] > .input').click().type('100');
      
      cy.get('select[name="fromAccountId"]').then(($select) => {
        const firstValue = $select.find('option').eq(0).text();
        cy.get('select[name="fromAccountId"]').should('have.value', firstValue);
        cy.get('.button').eq(1).click();
        cy.reload(true);
      });
    }
  }
  
  export default BillPayPage;
  