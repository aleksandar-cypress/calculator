class LeftMenu {
    getProperty() {
        return cy.xpath(".//*[@title='Property']");
    }
    getPipeline() {
        return cy.xpath(".//*[@title='Pipeline']");
    }
    getManagementCompany() {
        return cy.xpath(".//*[@title='Management']");
    }
    getDirectory() {
        return cy.xpath(".//*[@title='Directory']");
    }
    navigatePropertyBlankSearch() {
        this.getProperty().click({ force: true });
        cy.get('.box__text').contains('New Search').click({ force: true });
    }
    navigatePipelineNewSearch() {
        this.getPipeline().click({ force: true });
        cy.get('[e2e-id=837ce3c8-e554-4146-80e9-8de3535daa91]')
            .contains('New Search')
            .click({ force: true });
    }
    navigateManagementCompanyNewSearch() {
        this.getManagementCompany().click({ force: true });
        cy.get('[e2e-id=f225620e-0639-4493-b795-eaae266e93ab]')
            .eq(0)
            .click({ force: true });
    }
    navigateOfficeLocationsNewSearch() {
        this.getManagementCompany().click({ force: true });
        cy.xpath(
            '//body/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-submenu-panel[1]/app-product-menu-dialog[1]/div[1]/app-product-menu[2]/div[1]/div[2]/app-option-item[1]/div[1]/div[2]'
        ).click({ force: true });
    }
    navigateDirectoryBlankSearch() {
        this.getDirectory().click({ force: true });
        cy.get('[e2e-id=f225620e-0639-4493-b795-eaae266e93ab]')
            .contains('New Search')
            .click({ force: true });
    }
}
export const leftmenu = new LeftMenu();
