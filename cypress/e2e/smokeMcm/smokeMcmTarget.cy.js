import Service from './service.js';
import mcm from '../../fixtures/mcmSettings.json';
import mcmElement from '../../fixtures/mcmElement.json'
let testSearch = mcm.testSearch;
let testSearchExactly = mcm.testSearchExactly;

describe('10 case for smoke test MCM', () => {

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

    it('1 case: transition from main mcm page to target and visibility main elements', () => {

        cy.get(mcmElement.transitionToTarget)
        .should('be.visible')
        .click();
        cy.get(mcmElement.transitionToContent)
        .should('be.visible');
        cy.get(mcmElement.transitionToTarget)
        .should('be.visible');
        cy.get(mcmElement.transitionToDistribution)
        .should('be.visible');
        cy.get(mcmElement.transitionToReports)
        .should('be.visible');
        cy.get(mcmElement.transitionToConferences)
        .should('be.visible');
        cy.get(mcmElement.searchField, {timeout: 10000})
        .should('be.visible');


    });

    it('2 case: visibility target elements', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();

        cy.get(mcmElement.searchField, {timeout: 10000})
        .should('be.visible');

        cy.get(mcmElement.headerListGroup, {timeout: 10000})
        .should('be.visible');

        cy.get(mcmElement.showArchiveChrxbox)
        .should('be.visible');

        cy.get(mcmElement.sortDropDownMenu)
        .should('be.visible');

        cy.get(mcmElement.paginationBlock, {timeout: 10000})
        .should('be.visible');

        cy.get(mcmElement.paginationEnterPageNumber)
        .should('be.visible');

        cy.get(mcmElement.addButton, {timeout: 10000})
        .should('be.visible');
    })

    it('3 case: is work add button?', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();
         
        cy.get(mcmElement.targetEditWindow)
        .should('not.be.visible');

        cy.get(mcmElement.addButton, {timeout: 10000})
        .click();

        cy.get(mcmElement.targetEditWindow)
        .should('be.visible');
       
    });

    it('4 case: visibility elements in add target window', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();

        cy.get(mcmElement.addButton, {timeout: 10000})
        .click();

        cy.get(mcmElement.targetEditWindow)
        .should('be.visible');

        cy.get(mcmElement.targetHeaderEditWindow)
        .should('be.visible')
        .and('have.text', mcm.targetAudience);

        cy.get(mcmElement.targetLabelNameFieldEditWindow)
        .should('be.visible')
        .and('have.text', mcm.targetName);

        cy.get(mcmElement.targetInputNameField)
        .should('be.visible');

        cy.get(mcmElement.targetArchiveCheckboxLabelEditWindow)
        .should('be.visible');

        cy.get(mcmElement.targetAddFilterButtonEditWindow)
        .should('be.visible');

        cy.get(mcmElement.targetChooseFileLabelEditWindow)
        .should('be.visible');

        cy.get(mcmElement.targetAddFileButtonEditWindow)
        .should('be.visible');

        cy.get(mcmElement.targetDashbordContactEditWindow)
        .should('be.visible');

        cy.get(mcmElement.targetCancelButtonEditWindow)
        .should('be.visible');

        cy.get(mcmElement.targetSaveButtonEditWindow)
        .should('be.visible');

       
    });

    it('5 case: search from upper case', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();
         
         
       cy.get(mcmElement.searchField)
       .type(`${testSearch[0].toUpperCase()+testSearch.slice(1, testSearch.length)}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearch.toLowerCase())
       });




    });

    it('6 case: search from lower case', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();
         
        
       cy.get(mcmElement.searchField)
       .type(`${testSearch[0].toLowerCase()+testSearch.slice(1, testSearch.length)}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearch.toLowerCase())
       });
    })

    it('7 case: search slice word', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();
         
        

        cy.get(mcmElement.searchField)
       .type(`${testSearchExactly.slice(0, testSearchExactly.length-2)}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearchExactly.toLowerCase())
       });
    });

    it('8 case: search exactly word', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();
         
        

        cy.get(mcmElement.searchField)
       .type(`${testSearchExactly}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearchExactly.toLowerCase())
       });
    });

    it('9 case, save TA with empty fields', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();

        cy.get('.btn.btn-add')
        .click();

        cy.get('.btn.btn-primary')
        .click();

        cy.get('.alert-warning.ng-scope', {timeout: 10000})
        .should('be.visible');

        cy.get('.has-error ')
        .should('be.visible')
        
    });

    it('10 case: press Cancel button in Edit window', () => {

        cy.get(mcmElement.transitionToTarget, {timeout: 10000})
        .click();

        cy.get(mcmElement.addButton)
        .click();
 
        cy.get('#edit-target-form')
        .should('be.visible')

        cy.get('#edit-target > div > div > .modal-footer > .btn-default')
        .click();

        cy.get('#edit-target-form')
        .should('not.be.visible');
      
    });

})