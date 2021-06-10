// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { login } from '../integration/pageObjects/login';
import { search } from '../integration/pageObjects/search';
import { propertyNewSearch } from '../integration/pageObjects/propertyNewSearch';
import {
    managementCompanyNewSearch,
    officeLocationsNewSearch,
} from '../integration/pageObjects/managementCompaniesNewSearch';
import { directoryNewSearch } from '../integration/pageObjects/directoryNewSearch';
import { addCommaToNumber } from '../integration/common/helps';
const apiDomain = Cypress.env('apiDomain');
Cypress.Commands.add('login', () => {
    cy.visit('/signin');
    const email = Cypress.env('email');
    const password = Cypress.env('password');
    login.submit({ email: email, password: password });
});
Cypress.Commands.add('clickBoxText', ({ name: name }) => {
    cy.contains(`${name}`).click();
});
Cypress.Commands.add('verifySearch', () => {
    cy.intercept({
        method: 'POST',
        url: `${apiDomain}/Staging_v1/api/search/property`,
        times: 40000,
    }).as('apiSearch');
    propertyNewSearch.getRunBTN().click();
    cy.wait('@apiSearch').then(interception => {
        const statusCode = interception.response.statusCode;
        const total = interception.response.body.total || 0;
        assert.equal(statusCode, 200);
        if (statusCode === 200 && total >= 0) {
            if (total > 0) {
                search
                    .getSearchResult()
                    .should('be.visible')
                    .and('contain.text', addCommaToNumber({ value: total }));
            } else if (total === 0) {
                cy.contains('No results found for your search').should('be.visible');
            }
        }
    });
});
Cypress.Commands.add('verifySearchPipeline', () => {
    cy.intercept({
        method: 'POST',
        url: `${apiDomain}/Staging_v1/api/search/pipeline`,
        times: 40000,
    }).as('apiSearch');
    propertyNewSearch.getRunBTN().click();
    cy.wait('@apiSearch').then(interception => {
        const statusCode = interception.response.statusCode;
        const total = interception.response.body.total || 0;
        assert.equal(statusCode, 200);
        if (statusCode === 200 && total >= 0) {
            if (total > 0) {
                search
                    .getSearchResult()
                    .should('be.visible')
                    .and('contain.text', addCommaToNumber({ value: total }));
            } else if (total === 0) {
                cy.contains('No results found for your search').should('be.visible');
            }
        }
    });
});
Cypress.Commands.add('verifySearchManagement', () => {
    cy.intercept({
        method: 'POST',
        url: `${apiDomain}/Staging_v1/api/search/management`,
        times: 40000,
    }).as('apiSearch');
    managementCompanyNewSearch.getRunBTN().click();
    cy.wait('@apiSearch').then(interception => {
        const statusCode = interception.response.statusCode;
        const total = interception.response.body.total || 0;
        assert.equal(statusCode, 200);
        if (statusCode === 200 && total >= 0) {
            if (total > 0) {
                search
                    .getSearchResult()
                    .should('be.visible')
                    .and('contain.text', addCommaToNumber({ value: total }));
            } else if (total === 0) {
                cy.contains('No results found for your search').should('be.visible');
            }
        }
    });
});
Cypress.Commands.add('verifySearchOffice', () => {
    cy.intercept({
        method: 'POST',
        url: `${apiDomain}/Staging_v1/api/search/office`,
        times: 40000,
    }).as('apiSearch');
    officeLocationsNewSearch.getRunBTN().click();
    cy.wait('@apiSearch').then(interception => {
        const statusCode = interception.response.statusCode;
        const total = interception.response.body.total || 0;
        assert.equal(statusCode, 200);
        if (statusCode === 200 && total >= 0) {
            if (total > 0) {
                search
                    .getSearchResult()
                    .should('be.visible')
                    .and('contain.text', addCommaToNumber({ value: total }));
            } else if (total === 0) {
                cy.contains('No results found for your search').should('be.visible');
            }
        }
    });
});
Cypress.Commands.add('verifySearchDirectory', () => {
    cy.intercept({
        method: 'POST',
        url: `${apiDomain}/Staging_v1/api/search/directory`,
        times: 40000,
    }).as('apiSearch');
    directoryNewSearch.getRunBTN().click();
    cy.wait('@apiSearch').then(interception => {
        const statusCode = interception.response.statusCode;
        const total = interception.response.body.total || 0;
        assert.equal(statusCode, 200);
        if (statusCode === 200 && total >= 0) {
            if (total > 0) {
                search
                    .getSearchResult()
                    .should('be.visible')
                    .and('contain.text', addCommaToNumber({ value: total }));
            } else if (total === 0) {
                cy.contains('No results found for your search').should('be.visible');
            }
        }
    });
});
