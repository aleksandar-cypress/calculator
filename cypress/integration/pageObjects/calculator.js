class Calculator {
    getInputTXT() {
        return cy.get("#number");
    }
    getCalculateBTN() {
        return cy.get("#getFactorial");
    }
    getResult() {
        return cy.get("#resultDiv");
    }
    calculate({ value }) {
        if (value !== "") {
            this.getInputTXT().clear().type(value);
        }
        this.getCalculateBTN().click({ force: true });
    }
    verifyCalculation({ value }) {
        this.calculate({ value: value });
        if (Number.isInteger(value)) {
            this.getResult()
                .should(
                    "have.text",
                    `The factorial of ${value} is: ${this.factorial(value)}`
                )
                .and("be.visible");
        } else {
            this.getResult()
                .should("have.text", "Please enter an integer")
                .and("be.visible");
        }
    }
    factorial(number) {
        let total = 1;
        while (number > 0) {
            total *= number;
            number = number - 1;
        }
        return total;
    }
}
export const calculator = new Calculator();
