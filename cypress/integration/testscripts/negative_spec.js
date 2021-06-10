import { calculator } from "../pageObjects/calculator";
describe("Negative test cases", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Submit integer value with minus, and check validation ", () => {
        calculator.verifyCalculation({ value: "1-" });
    });

    it("Submit integer value with plus, and check validation ", () => {
        calculator.verifyCalculation({ value: "1+" });
    });

    it("Submit number value with decimal point, and check validation ", () => {
        calculator.verifyCalculation({ value: "0.6" });
    });

    it('Submit number with the letter "e" in it, and check validation ', () => {
        calculator.verifyCalculation({ value: "6e" });
    });

    it("Submit special character(s), and check validation ", () => {
        calculator.verifyCalculation({ value: "@!#$%^^&*()" });
    });
    it("Submit with nothing entered, and check validation ", () => {
        calculator.verifyCalculation({ value: "" });
    });

    it("Submit only space, and check validation ", () => {
        calculator.verifyCalculation({ value: "  " });
    });
    it("Submit true boolean, and check validation ", () => {
        calculator.verifyCalculation({ value: "true" });
    });
    it("Submit false boolean, and check validation ", () => {
        calculator.verifyCalculation({ value: "false" });
    });
    it("Submit Infinity, and check validation ", () => {
        calculator.verifyCalculation({ value: "Infinity" });
    });
    it("Submit -Infinity, and check validation ", () => {
        calculator.verifyCalculation({ value: "-Infinity" });
    });
    it("Submit e, and check validation ", () => {
        calculator.verifyCalculation({ value: "e" });
    });
});
