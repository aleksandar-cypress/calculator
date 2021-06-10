class Login {
    getEmail() {
        return cy.get('input[type="email"]');
    }
    getPassword() {
        return cy.get('input[type="password"]');
    }
    getLetGetSmartBTN() {
        return cy.contains("Let's get SMART");
    }

    submit({ email, password }) {
        this.getEmail().clear().type(email);
        this.getPassword().clear().type(password);
        this.getLetGetSmartBTN().click();
    }
}
export const login = new Login();
