import Service from './service.js';
import mcm from '../../fixtures/mcm.json'

describe('Test main page of MCM', () => {

    const service = new Service();
    beforeEach (() => {
                
        cy.viewport(mcm.screenWidth, mcm.screenHight);
        cy.visit(mcm.testServer);     
        cy.get('#username')
        .type(mcm.userName)
        .should('have.value', mcm.userName);
        cy.get('#password')
        .type(mcm.userPassword)
        .should('have.value', mcm.userPassword);
        cy.get('.btn')
        .should('be.visible')
        .click();  
        cy.get('h1', {timeout:10000}).should('be.visible')
        cy.get('html', {timeout: 10000})
        .invoke('attr', 'lang')
        .should('eq', mcm.language);    
        service.btnMCM().click({force: true});
        
});

    it('1 case: go to page', () => {

        cy.get('[ui-sref="content"]')
        .click();

        cy.get('div.search')
        .should('be.visible');

    });

    it('2 case: visibility of elements', () => {

        cy.get('[ui-sref="content"]')
        .click();

        cy.get('div.search')
        .should('be.visible');

        cy.get('div.header-list-group')
        .should('be.visible');

        cy.get('.header-list-group > .checkbox')
        .should('be.visible');

        cy.get('#dropdown-li-none')
        .should('be.visible');

        cy.get('.header-list-group > button')
        .should('be.visible');

        cy.get('.pagination')
        .should('be.visible');

        cy.get('div.input-group')
        .should('be.visible');

        cy.get('div.add-button-dropdown')
        .should('be.visible');

        cy.get('ui-view > div:nth-child(2) > div')
        .should('be.visible');

    });

    it('3 case: open content creation method selection', () => {
        cy.get('[ui-sref="content"]')
        .click();

        cy.get('.btn-telegram')
        .should('not.be.visible');

        cy.get('.btn-viber')
        .should('not.be.visible');

        cy.get('.btn-sms')
        .should('not.be.visible');

        cy.get('.btn-email')
        .should('not.be.visible');

        cy.get('div.add-button-dropdown', {timeout: 10000})
        .should('be.visible')
        .click();

        cy.get('.btn-telegram')
        .should('be.visible');

        cy.get('.btn-viber')
        .should('be.visible');

        cy.get('.btn-sms')
        .should('be.visible');

        cy.get('.btn-email')
        .should('be.visible');
    });

    it('4 case: visibility of viber content creation elements', () => {
        cy.get('[ui-sref="content"]', {timeout:10000})
        .click();

        cy.get('div.add-button-dropdown', {timeout: 10000})
        .click();

        cy.get('.btn-viber')
        .click();

        cy.get('#edit-viber > div > div')
        .should('be.visible');

        cy.get('#edit-viber > div > div > .modal-header > h4')
        .should('be.visible');

        cy.get('#edit-viber > div > div > .modal-header > h4')
        .should('be.visible');


    })



});