describe('Positive test cases', () => {
      beforeEach(()=>{
        cy.visit('/')
        });

    it('Submit integer value at lower boundary [ 0 ]', () => {
        cy.get('[id="number"]').type('0')
        cy.get('#getFactorial').click()
        cy.get('[id="resultDiv"]').should('have.text', 'The factorial of 0 is: 1')
        cy.get('[id="number"]').clear().end()
    });

    it('Submit integer value with [ 1 ]', () => {
        cy.get('[id="number"]').type('1')
        cy.get('#getFactorial').click()
        cy.get('[id="resultDiv"]').should('have.text', 'The factorial of 1 is: 1')
        cy.get('[id="number"]').clear().end()
    });

    it('Submit integer value at upper boundary [ 170 ]', () => {
        cy.get('[id="number"]').type('170')
        cy.get('#getFactorial').click()
        cy.get('[id="resultDiv"]').should('have.text', 'The factorial of 170 is: 7.257415615307999e+306')
        cy.get('[id="number"]').clear().end()
    });

    it('Submit integer value with [ 171 ] and reach Infinity', () => {
        cy.get('[id="number"]').type('171')
        cy.get('#getFactorial').click()
        cy.get('[id="resultDiv"]').should('have.text', 'The factorial of 171 is: Infinity')
        cy.get('[id="number"]').clear().end()
    });


    // it('Submit number value with decimal point, and check validation ', () => {
    //     cy.get('[id="number"]').type('0.6')
    //     cy.get('#getFactorial').click()
    //     cy.get('#resultDiv').should('contain', 'Please enter an integer')        
    //     cy.get('[id="number"]').clear()
    // });

    // it('Submit number with the letter "e" in it, and check validation ', () => {
    //     cy.get('[id="number"]').type('6e')
    //     cy.get('#getFactorial').click()
    //     cy.get('#resultDiv').should('contain', 'Please enter an integer')        
    //     cy.get('[id="number"]').clear()
    // });

    // it('Submit special character(s), and check validation ', () => {
    //     cy.get('[id="number"]').type('@!#$%^^&*()')
    //     cy.get('#getFactorial').click()
    //     cy.get('#resultDiv').should('contain', 'Please enter an integer')        
    //     cy.get('[id="number"]').clear()
    // });

    // it('Submit with nothing entered, and check validation ', () => {
    //     cy.get('#getFactorial').click()
    //     cy.get('#resultDiv').should('contain', 'Please enter an integer')        
    //     cy.get('[id="number"]').clear()
    // });

    // it('Submit only space, and check validation ', () => {
    //     cy.get('[id="number"]').type('   ')
    //     cy.get('#getFactorial').click()
    //     cy.get('#resultDiv').should('contain', 'Please enter an integer')        
    //     cy.get('[id="number"]').clear()
    // });
});