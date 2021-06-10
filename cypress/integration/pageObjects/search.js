class Search {
    changeToBirminghamFilter() {
        cy.get('[e2e-id=a9bc7dca-98c5-42b5-b5d2-63d3f79437f2]').click({ force: true });
        cy.get('[e2e-id=07c36d0d-9eed-4e3a-a24b-be638d1afbf4]')
            .contains('National')
            .click({ force: true });
        cy.get('[e2e-id=a3d4af18-296d-4c1b-931a-61e39806280e]')
            .contains('Birmingham')
            .click({ force: true });
    }
    getFirstItem() {
        return cy.xpath('//tbody/tr[1]/td[1]');
    }
    getSearchResult() {
        return cy.get('.grid-toolbox-total.ng-star-inserted');
    }
    getNameTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[1]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getFormernameTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[2]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getConcessionsTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[3]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getMarketTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[4]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getSubmarketTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[5]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getManagementCompanyTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[6]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getRegionalSupervisorTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[7]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getOnsiteMgrTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[8]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getAddressTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[9]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getStateTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[10]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getCityTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[11]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getZipTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[12]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
    getPhoneTXT() {
        return cy.xpath(
            '//thead/tr[1]/th[13]/div[1]/div[2]/app-table-search-input[1]/div[1]/input[1]'
        );
    }
}
export const search = new Search();
