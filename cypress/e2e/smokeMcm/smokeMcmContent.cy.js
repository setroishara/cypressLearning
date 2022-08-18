import Service from './service.js';
import mcm from '../../fixtures/mcmSettings.json'
import mcmElement from '../../fixtures/mcmElement.json'

describe('Test content page of MCM', () => {

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

   

    it('1 case: visibility main elements', () => {

        cy.get(mcmElement.transitionToContent)
        .click();

        cy.get(mcmElement.searchField)
        .should('be.visible');

        cy.get(mcmElement.headerListGroup)
        .should('be.visible');

        cy.get(mcmElement.showArchiveChrxbox)
        .should('be.visible');

        cy.get(mcmElement.sortDropDownMenu)
        .should('be.visible');

        cy.get(mcmElement.filterButton)
        .should('be.visible');

        cy.get(mcmElement.paginationBlock)
        .should('be.visible');

        cy.get(mcmElement.paginationEnterPageNumber)
        .should('be.visible');

        cy.get(mcmElement.addButton)
        .should('be.visible');

        

    });

    it('2 case: open content creation method selection', () => {
        cy.get(mcmElement.transitionToContent)
        .click();

        cy.get(mcmElement.contentTelegramButton)
        .should('not.be.visible');

        cy.get(mcmElement.contentViberButton)
        .should('not.be.visible');

        cy.get(mcmElement.contentSmsButton)
        .should('not.be.visible');

        cy.get(mcmElement.contentEmailButton)
        .should('not.be.visible');

        cy.get(mcmElement.addButton, {timeout: 10000})
        .should('be.visible')
        .click();

        cy.get(mcmElement.contentTelegramButton)
        .should('be.visible');

        cy.get(mcmElement.contentViberButton)
        .should('be.visible');

        cy.get(mcmElement.contentSmsButton)
        .should('be.visible');

        cy.get(mcmElement.contentEmailButton)
        .should('be.visible');
    });

    it('3 case: visibility of viber content creation elements', () => {

        cy.get(mcmElement.transitionToContent)
        .click();

        cy.get(mcmElement.addButton, {timeout:10000})
        .click();

        cy.get(mcmElement.contentViberButton)
        .click();

        cy.get(mcmElement.contentEditViberWindow)
        .should('be.visible');

        cy.get(mcmElement.contentHeaderEditViberWindow)
        .should('be.visible')
        .and('have.text', mcm.contentViberNameEditWindow);

        cy.get(mcmElement.contentNameLabelEditViberWindow)
        .should('be.visible')
        .and('have.text', mcm.contentViberName);

        cy.get(mcmElement.contentNameFieldEditViberWindow, {timeout:10000})
        .should('be.visible');

        cy.get(mcmElement.contentMarkFieldEditViberWindow)
        .should('be.visible');


    })



});