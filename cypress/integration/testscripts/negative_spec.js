describe('Negative test cases', () => {
      beforeEach(()=>{
        cy.visit('/')
        });

    it('Submit integer value with minus, and check validation ', () => {
        cy.get('[id="number"]').type('1-')
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter an integer')
        cy.get('[id="number"]').clear()
    });

    it('Submit integer value with plus, and check validation ', () => {
        cy.get('[id="number"]').type('1+')
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter an integer')        
        cy.get('[id="number"]').clear()
    });


    it('Submit number value with decimal point, and check validation ', () => {
        cy.get('[id="number"]').type('0.6')
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter an integer')        
        cy.get('[id="number"]').clear()
    });

    it('Submit number with the letter "e" in it, and check validation ', () => {
        cy.get('[id="number"]').type('6e')
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter an integer')        
        cy.get('[id="number"]').clear()
    });

    it('Submit special character(s), and check validation ', () => {
        cy.get('[id="number"]').type('@!#$%^^&*()')
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter an integer')        
        cy.get('[id="number"]').clear()
    });

    it('Submit with nothing entered, and check validation ', () => {
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter an integer')        
        cy.get('[id="number"]').clear()
    });

    it('Submit only space, and check validation ', () => {
        cy.get('[id="number"]').type('   ')
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter an integer')        
        cy.get('[id="number"]').clear().end()
    });
});