class PipelineNewSearch {
    // getProjectName() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-pipeline-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-project-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    // getManagementCompaniesTXT() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-pipeline-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[7]/div[1]/app-adv-search-pipeline-mgmt[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    getDevelopTXT() {
        return cy.xpath(".//*[@placeholder='Type the developer name']");
    }
    getTagNameTXT() {
        return cy.get('[e2e-id=400a7a14-9000-4c49-9523-54a61daa45b6]');
    }
    getAddAnotherTXT() {
        return cy.get('[e2e-id=b78e3d64-1893-4eb9-93b0-78d49409e011]');
    }
    getResetBTN() {
        return cy.get('[e2e-id=569ccb9a-3114-4a27-b28e-8d42dc8c14b2]');
    }
    getRunBTN() {
        return cy.get('[e2e-id=f5aba7d0-381b-47e5-8921-6d11c022180e]');
    }
}
class PipelineLocation {
    getZipCodeTXT() {
        return cy.xpath("//input[@placeholder='Zip Code']");
    }
    getApplyBTN() {
        return cy.get('[e2e-id=9711f18e-c00b-48c7-b12f-345dc19b1d81]');
    }
    fillInZipcode({ zipcode }) {
        this.getZipCodeTXT().clear().type(zipcode);
        cy.wait(2500);
        this.getZipCodeTXT().clear().type('{downarrow}{enter}');
        this.getApplyBTN().click({ force: true });
    }
}
export const pipelineLocation = new PipelineLocation();
export const statuses = ['Proposed', 'Under Construction', 'Pre-leasing', 'Cancelled'];
export const builtTypes = ['Low Rise', 'Mid Rise', 'High Rise', 'Sky'];
export const housingTypes = [
    'Senior',
    //'Conventional',
    'Tax Credit',
    'Student Housing',
    // 'Mixed Use',
    'Section 8 OK',
    'Income Restricted',
];
export const options = [
    'Pipeline Location',
    'Project Names',
    'Built Type',
    'Housing type',
    'Timeline',
    'Management Companies',
    'Developer',
    'Tags',
    'Add Another',
];
export const pipelineNewSearch = new PipelineNewSearch();
