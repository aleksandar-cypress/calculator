class PropertyNewSearch {
    getSearchIcon() {
        return cy.xpath(".//*[@data-mat-icon-name='search']");
    }
    // getSearchTXT() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-property-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    getNameSearchTXT() {
        return cy.xpath(
            '//body/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[2]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/app-filterable-node[2]/div[1]/app-adv-search-property-names[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-suggest-product[1]/div[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]'
        );
    }
    getStatusBTN({ name }) {
        return cy.contains(`${name}`);
    }
    getResetBTN() {
        return cy.get('[e2e-id=569ccb9a-3114-4a27-b28e-8d42dc8c14b2]');
    }
    getRunBTN() {
        return cy.get('[e2e-id=f5aba7d0-381b-47e5-8921-6d11c022180e]');
    }
    getSortWithArrowsIcon() {
        return cy.xpath(".//*[@icon='sortWithArrows']");
    }
}
class ManagementCompany {
    // getManagedTXT() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-property-managed-by[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-property-managed-by[1]/div[1]/div[1]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
    // getSupervisorTXT() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[4]/div[1]/app-adv-search-property-managed-by[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-property-managed-by[1]/div[1]/div[2]/app-input-with-match[1]/form[1]/div[1]/div[1]/textarea[1]'
    //     );
    // }
}
class YearBuiltSizeType {
    getButton({ name: name }) {
        return cy.get('.box__grid').contains(`${name}`);
    }
    clickButton({ name: name }) {
        this.getButton({ name: name }).click();
    }
}
class HousingType {
    getButton({ name: name }) {
        return cy.get('#cdk-accordion-child-5').contains(`${name}`);
    }
    clickButton({ name: name }) {
        this.getButton({ name: name }).click();
    }
}
class Pets {
    // getNumberOfPetsTXT() {
    //     return cy
        
    //         .get('[e2e-id=c8701179-9c1c-4ee5-a5bf-dabf9a245435]'
    //     );
    // }
    // getMaxPet() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[12]/div[1]/app-adv-search-pets[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/app-pets[1]/div[1]/div[1]/div[2]/div[2]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    getNoBreedRestrictionsBTN() {
        return cy
            .get('[e2e-id=c8701179-9c1c-4ee5-a5bf-dabf9a245435]')
            .contains('No Breed Restrictions');
    }
    getNoPetInterviewBTN() {
        return cy
            .get('[e2e-id=c8701179-9c1c-4ee5-a5bf-dabf9a245435]')
            .contains('No Pet Interview');
    }
}
class Policies {
    getBrokenLeasesBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(0);
    }
    getEvictionsBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(1);
    }
    getBankruptciesBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(2);
    }
    getFelonyRecordBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(3);
    }
    getMisdemeanorsBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(4);
    }
    getForeclosuresBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(5);
    }
    get1stTimeRentersBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(6);
    }
    getNoRentHistoryBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(7);
    }
    getCoSignersBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(8);
    }
    getNoCreditBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(9);
    }
    getSeniorDiscountsBTN() {
        return cy
            .get('.radio-content')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(10);
    }

    getNoneBTN() {
        return cy
            .get('.box__list.ng-tns-c684-59')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(0);
    }
    getRentBTN() {
        return cy.get('[e2e-id=5e156aa4-16c2-4d8e-940b-0bf92ba022c9]');
    }
    getRentTXT() {
        return cy.get('#k-4e0579ac-6122-4fbc-b38a-22c4c93c2ea2');
    }
}
class Parking {
    getReservedSpacesBTN() {
        return cy
            .get('.box.gap-v-16.ng-star-inserted')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(0);
    }
    getParkingGarageLotBTN() {
        return cy
            .get('.box.gap-v-16.ng-star-inserted')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(1);
    }
    getCoveredSpacesBTN() {
        return cy
            .get('.box.gap-v-16.ng-star-inserted')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(2);
    }
    getBreezewayBTN() {
        return cy
            .get('.box.gap-v-16.ng-star-inserted')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(3);
    }
    getAttachedGarageBTN() {
        return cy
            .get('.box.gap-v-16.ng-star-inserted')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(4);
    }
    getDetachedGarageBTN() {
        return cy
            .get('.box.gap-v-16.ng-star-inserted')
            .find('[e2e-id=5a24b05f-b05b-4ad0-a739-cac4b96480c5]')
            .eq(5);
    }
}
class Tags {
    getTagTXT() {
        return cy.get('[e2e-id=400a7a14-9000-4c49-9523-54a61daa45b6]');
    }
    clickOption({ option: name }) {
        return cy.contains(`${name}`).click();
    }
}
class LocatorCommissions {
    getToggleBTN() {
        return cy.get('#mat-slide-toggle-2-input');
    }
    // getEscortFeeTXT() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[14]/div[1]/app-adv-search-commissions[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/app-commissions[1]/div[1]/div[2]/div[2]/app-fee-input[1]/div[1]/div[2]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getSentFeeTXT() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[14]/div[1]/app-adv-search-commissions[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/app-commissions[1]/div[1]/div[2]/div[3]/app-fee-input[1]/div[1]/div[2]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
    // getFlatFeeTXT() {
    //     return cy.xpath(
    //         '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[14]/div[1]/app-adv-search-commissions[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/app-commissions[1]/div[1]/div[2]/div[4]/app-fee-input[1]/div[1]/div[2]/kendo-numerictextbox[1]/span[1]/input[1]'
    //     );
    // }
}
class Schools {
    getDistrictTXT() {
        return cy.get('#mat-input-0');
    }
    getElementaryTXT() {
        return cy.get('#mat-input-1');
    }
    getMiddleTXT() {
        return cy.get('#mat-input-2');
    }
    getIntermediateTXT() {
        return cy.get('#mat-input-3');
    }
    getHighTXT() {
        return cy.get('#mat-input-4');
    }
}
// class Floorplans extends PropertyNewSearch {
//     getBedRoomFrom() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
//         );
//     }
//     getBedRoomTo() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[1]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
//         );
//     }
//     getBathsFrom() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[2]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
//         );
//     }
//     getBathsTo() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[2]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
//         );
//     }
//     getRentFrom() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[3]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
//         );
//     }
//     getRentTo() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[3]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
//         );
//     }
//     getFtFrom() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[4]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
//         );
//     }
//     getFtTo() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[4]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
//         );
//     }
//     getRentPerFrom() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[5]/app-from-to[1]/div[1]/kendo-numerictextbox[1]/span[1]/input[1]'
//         );
//     }
//     getRentPerTo() {
//         return cy.xpath(
//             '//body[1]/app-root[1]/div[1]/div[1]/app-routed-panel-container[1]/app-left-sidebar[1]/div[1]/app-routed-panel[1]/app-property-filters-set[1]/div[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/mat-accordion[1]/app-filterable-node[1]/div[1]/div[1]/app-filterable-node[8]/div[1]/app-adv-search-floorplans[1]/app-filter-panel[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[1]/app-floorplans[1]/app-filterable-node[1]/div[1]/div[1]/div[5]/app-from-to[1]/div[1]/kendo-numerictextbox[2]/span[1]/input[1]'
//         );
//     }
//     getRoomStatus() {
//         return ['Available', 'On Notice', 'Unavailable'];
//     }
// }
class ComputerizedPricing {
    getButton({ name: name }) {
        return cy.get('.box__grid').contains(`${name}`);
    }
    clickButton({ name: name }) {
        this.getButton({ name: name }).click();
    }
    getToggleBTN() {
        return cy.get('#mat-slide-toggle-3-input');
    }
}
class SoftwareSystem {
    getButton({ name: name }) {
        return cy.get('.box__grid').contains(`${name}`);
    }
    clickButton({ name: name }) {
        this.getButton({ name: name }).click();
    }
    getToggleBTN() {
        return cy.get('#mat-slide-toggle-3-input');
    }
}
class AddAnother {
    getSearchTXT() {
        return cy.get('[e2e-id=b78e3d64-1893-4eb9-93b0-78d49409e011]');
    }
}
class FilterOrderPopUp extends PropertyNewSearch {
    getCancelBTN() {
        return cy.get('[e2e-id=E858A1A0-F399-4E68-AD1D-380BCE3A5AB3]');
    }
}
export const options = [
    'Property Location',
    'Property Names',
    'Status',
    'Management Companies',
    'Management Companies',
    'Year Built, Size & Type',
    'Housing type',
    'Rents & Occupancy',
    // 'Floorplans',
    'Amenities',
    'Policies',
    'Parking',
    'Pets',
    'Tags',
    'Locator Commissions',
    'Schools',
    'Computerized Pricing',
    'Software System',
];
export const locations = [
    'Market & Submarket',
    'Proximity from',
    'Proximity from',
    'Narrow to City, Street, Zip',
    'Draw areas on a map',
];
export const housingTypes = [
    'Senior',
    'Conventional',
    'Tax Credit',
    // 'Student Housing',
    'Section 8 OK',
    'Income Restricted',
];
export const softwaresystems = [
    'AIM',
    'AMSI',
    'Appfolio',
    'Buildium',
    'Bostonpost',
    'CoreLogic/Jenark',
    'Entrata',
    'MRI',
    'ResMan',
    'OneSite',
    // 'PropertyBoss',
    // 'PropertyWare',
    'Rent Manager',
    'Skyline',
    'Yottareal',
];
export const statuses = ['Active', 'Inactive', 'Off-line'];
export const propertyNewSearch = new PropertyNewSearch();
// export const floorplans = new Floorplans();
export const managementCompany = new ManagementCompany();
export const yearBuiltSizeType = new YearBuiltSizeType();
export const housingType = new HousingType();
export const parking = new Parking();
export const pets = new Pets();
export const tags = new Tags();
export const locatorCommissions = new LocatorCommissions();
export const schools = new Schools();
export const computerizedPricing = new ComputerizedPricing();
export const softwareSystem = new SoftwareSystem();
export const addAnother = new AddAnother();
export const filterOrderPopUp = new FilterOrderPopUp();
