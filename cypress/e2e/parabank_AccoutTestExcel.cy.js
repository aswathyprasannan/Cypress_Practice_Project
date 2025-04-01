describe('Test suite for account creation Page from Excel file', () => 
    {
        beforeEach(()=>{
          cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
        }) 
                  
    it('Should be able to create new savings account from excel file', () => {
            cy.readExcel('cypress/fixtures/TestDataExcel.xlsx').then((data) => {
            data.forEach((user) => {
                cy.get('#firstName').type(user.Firstname);
                cy.get('#firstName').clear();
            })
        })
    })
})