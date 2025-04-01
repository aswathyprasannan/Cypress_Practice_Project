describe('Test suite for Contact us Page', () => 
    {
      beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
      })

      it('Should be able to get contact us details', () => {
        
        cy.get(':nth-child(8) > a').click();
        cy.get('#rightPanel > p').click();
        cy.get('#name').clear('e');
        cy.get('#name').type('ee');
        cy.get('#email').clear();
        cy.get('#email').type('rrr');
        cy.get('#phone').clear();
        cy.get('#phone').type('ffrr');
        cy.get('[colspan="2"] > .button').click();
        
      });

});