class DirectoryNewSearch {
    getOptions() {
        return [
            'Contact Names',
            'Department',
            'Assets managed by Personnel',
            'Management Companies',
            'Tags',
            'Add Another',
        ];
    }
    getContactName() {
        return cy.xpath(
            '//*[@id="cdk-accordion-child-0"]/div/div/div/app-suggest-product/div/div/div[2]/app-input-with-match/form/div/div/textarea'
        );
    }
    selectDepartment(...options) {
        options.forEach(option => {
            this.getDepartment({ text: option }).click({ force: true });
        });
    }
    getDepartment({ text }) {
        return cy
            .get('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .contains(`${text}`);
    }
    // getPersonnelPropertiesFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getPersonnelPropertiesTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    // getPersonnelUnitsFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getPersonnelUnitsTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    getPersonnelLocatedIn() {
        return cy.get('#mat-input-0');
    }

    // getCompanyPropertyFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-mgmt-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-mgmt-names[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getCompanyPropertyTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-mgmt-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-mgmt-names[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    // getCompanyUnitsFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-mgmt-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-mgmt-names[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getCompanyUnitsTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-mgmt-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-mgmt-names[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    // getCompanyManagement() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-mgmt-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-mgmt-names[1]/div[1]/div[3]/div[1]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    // getCompanyAssets() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-mgmt-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-mgmt-names[1]/div[1]/div[3]/div[2]/app-input-element-tags[1]/div[1]/div[1]/input[1]'
    //     );
    // }
    getProperties() {
        return cy.xpath(
            '//body/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-directory-filters-set[1]/div[1]/div[2]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[4]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
        );
    }
    getTags() {
        return cy.get('[e2e-id=400a7a14-9000-4c49-9523-54a61daa45b6]');
    }
    getAddAnother() {
        return cy.get('[e2e-id=b78e3d64-1893-4eb9-93b0-78d49409e011]');
    }
    getResetBTN() {
        return cy.get('[e2e-id=569ccb9a-3114-4a27-b28e-8d42dc8c14b2]');
    }
    getRunBTN() {
        return cy.get('[e2e-id=f5aba7d0-381b-47e5-8921-6d11c022180e]');
    }
}
export const departments = [
    'Accounting',
    'Acquisition Disposition',
    'Broker',
    'Construction',
    'Executive',
    'Information Technology',
    'Maintenance',
    'Marketing / Training',
    'Operations Manager',
    'Regional Supervisor',
];
export const directoryNewSearch = new DirectoryNewSearch();
