
describe('Testing Elements on page', () => {
  beforeEach(()=>{
    cy.visit('/')
    });

    it('Feching H1 container and check does it contains "The greatest factorial calculator!"', () => {
      cy.get('.col-md-6 > .margin-base-vertical')
                .should('be.visible')
                .should('contain', 'The greatest factorial calculator!')
                
    });

    it('Checking if input filed is present on page and have placeholder with name "Enter an integer"', () => {
      cy.get('[id="number"]')
              .should('be.visible')
              .invoke('attr', 'placeholder')
              .should('contain', 'Enter an integer');
    });

    it('Checking if button is present on page and it is clickable', () => {
      cy.get('#getFactorial')
              .should('be.visible')
              .should('not.be.disabled')
    });

    it('Checking if button has type submit, color green, and contain "Calculate!"', () => {
      cy.get('#getFactorial')
              .should('be.visible')
              .should('have.css', 'background-color', 'rgb(92, 184, 92)')
              .should('contain', 'Calculate!');
    }); 

    it('Checking if link for Terms and Conditions is present on page', () => {
      cy.get('[href="/privacy"]').should('be.visible')
    }); 

    it('Checking if link for Privacy is present on page', () => {
      cy.get('[href="/terms"]').should('be.visible')
    }); 

    it('Checking if copy right is present on page', () => {
      cy.get('.row-fluid > :nth-child(2)').should('be.visible').end()
    }); 

});