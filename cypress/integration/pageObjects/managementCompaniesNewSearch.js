class Management {
    getTag() {
        return cy.get('[e2e-id=400a7a14-9000-4c49-9523-54a61daa45b6]');
    }
    getAdAnother() {
        return cy.get('[e2e-id=b78e3d64-1893-4eb9-93b0-78d49409e011]');
    }
    getResetBTN() {
        return cy.get('[e2e-id=569ccb9a-3114-4a27-b28e-8d42dc8c14b2]');
    }
    getRunBTN() {
        return cy.get('[e2e-id=f5aba7d0-381b-47e5-8921-6d11c022180e]');
    }
}
class ManagementCompanyNewSearch extends Management {
    getOptions() {
        return [
            'Management Company Names',
            'Properties managed by Company',
            'Pipeline managed by Company',
            'Specific Personnel Names',
            'Tags',
            'Add Another',
        ];
    }
    // getCompanyName() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[1]/div[1]/app-adv-search-company-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    // getPropertiesFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getPropertiesTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    // getUnitsFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getUnitsTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    getLocatedIn() {
        return cy.get('#mat-input-0');
    }
    // getProperties() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[4]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    // getPipelineFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getPipelineTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    // getPipelineUnitsFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }

    // getPipelineUnitsTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    getPipelineIn() {
        return cy.get('#mat-input-1');
    }
    // getManagePipeline() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[3]/app-input-element-tags[1]/div[1]/div[1]/input[1]'
    //     );
    // }
    // getIndividuals() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-specific-persons[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
}
class OfficeLocationsNewSearch extends Management {
    getOptions() {
        return [
            'Office Location',
            'Management Company Names',
            'Properties managed by Company',
            'Tags',
            'Add Another',
        ];
    }
    getOfficeLocationOption() {
        return cy
            .get('[e2e-id=CCE5ABB9-FB72-4327-B1D1-62EECA8C7181]')
            .contains(' Office Location ');
    }
    // getCompanyName() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-office-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-company-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    // getPropertiesFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-office-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getPropertiesTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-office-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    // getUnitsFrom() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-office-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getUnitsTo() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-management-office-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/div[1]/app-filterable-node[3]/div[1]/app-adv-search-props-managed[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-props-managed[1]/div[1]/div[2]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
    //     );
    // }
    getLocatedIn() {
        return cy.get('[e2e-id=b5f38466-f270-41c4-b6a4-8f7f242489e6]');
    }
}
class OfficeLocation {
    getOptions() {
        return [
            'Proximity from',
            'Draw areas on a map',
            'Regional office location',
            'Headquarters offices only',
        ];
    }
    getToggleBTN() {
        return cy.get('#mat-slide-toggle-1-input');
    }
}

export const managementCompanyNewSearch = new ManagementCompanyNewSearch();
export const officeLocationsNewSearch = new OfficeLocationsNewSearch();
export const officeLocation = new OfficeLocation();
