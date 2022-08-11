


import Service from './service.js';

let testSearch = 'тест';
let testSearchExactly = 'test vl 45 version';

describe('10 case for smoke test MCM', () => {

    const service = new Service();
    beforeEach (() => {
        
        cy.viewport(1920, 1080);
        cy.visit('https://1657278262-tt.pharmahrm.com/');     
        cy.get('#username')
        .type('Administrator')
        .should('have.value', 'Administrator');
        cy.get('#password')
        .type('GCq495v3=')
        .should('have.value', 'GCq495v3=');
        cy.get('.btn')
        .should('be.visible')
        .click();  
        cy.get('html', {timeout: 10000})
        .invoke('attr', 'lang')
        .should('equal', 'ru');
        service.btnMCM().click({force: true});
        
});

    it('1 case: go to page', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .should('be.visible')
        .click();

        cy.get('.ng-scope > input', {timeout: 10000})
        .should('be.visible');
    })

    it('2 case: visibility elements', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();

        cy.get('.ng-scope > input', {timeout: 10000})
        .should('be.visible');

        cy.get('div.header-list-group', {timeout: 10000})
        .should('be.visible');

        cy.get('mcm-pagination', {timeout: 10000})
        .should('be.visible');

        cy.get('.btn.btn-add', {timeout: 10000})
        .should('be.visible');
    })

    it('3 case: is work add button', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();
         
        cy.get('#edit-target> .modal-dialog > .modal-content')
        .should('not.be.visible');

        cy.get('.btn.btn-add', {timeout: 10000})
        .click();

        cy.get('#edit-target> .modal-dialog > .modal-content')
        .should('be.visible');
       
    });

    it('4 case: visibility elements in add target window', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();

        cy.get('.btn.btn-add', {timeout: 10000})
        .click();

        cy.get('#edit-target> .modal-dialog > .modal-content')
        .should('be.visible');

        cy.log('Test title add page');

        cy.get('#edit-target > div > div > div.modal-header.clearfix > h4')
        .should('be.visible')
        .and('have.text', 'Целевая аудитория');

        cy.get('#edit-target-form > div:nth-child(1) > label')
        .should('be.visible')
        .and('have.text', 'Название ЦА:');

        cy.get('#name')
        .should('be.visible');

        cy.get('#edit-target-form > div.checkbox > label')
        .should('be.visible');

        cy.get('#edit-target-form > div:nth-child(5) > button')
        .should('be.visible');

        cy.get('#edit-target-form > div.ng-scope > label')
        .should('be.visible');

        cy.get('#cssFile')
        .should('be.visible');

        cy.get('#edit-target-form > table')
        .should('be.visible');

        cy.get('#edit-target > div > div > div.modal-footer > button.btn.btn-default')
        .should('be.visible');

        cy.get('#edit-target > div > div > div.modal-footer > button.btn.btn-primary')
        .should('be.visible');

       
    });

    it('5 case: search from upper case', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();
         
         
       cy.get('.search> input')
       .type(`${testSearch[0].toUpperCase()+testSearch.slice(1, testSearch.length)}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearch.toLowerCase())
       });




    });

    it('6 case: search from lower case', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();
         
        
       cy.get('.search> input')
       .type(`${testSearch[0].toLowerCase()+testSearch.slice(1, testSearch.length)}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearch.toLowerCase())
       });
    })

    it('7 case: search slice word', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();
         
        

        cy.get('.search> input')
       .type(`${testSearchExactly.slice(0, testSearchExactly.length-2)}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearchExactly.toLowerCase())
       });
    });

    it('8 case: search exactly word', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();
         
        

        cy.get('.search> input')
       .type(`${testSearchExactly}{enter}`);
       
       
       cy.get('div:nth-child(1) >div.col-xs-4 > h5', {timeout: 10000}) 
       .should('be.visible')
       .and(($testCase) => {
        expect($testCase.text().toLowerCase()).to.include(testSearchExactly.toLowerCase())
       });
    });

    it('9 case, save TA with empty fields', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
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

    it('10 case, enter to add TA page and press Cancel', () => {

        cy.get('[ui-sref="target"]', {timeout: 10000})
        .click();

        cy.get('.btn.btn-add')
        .click();
 
        cy.get('#edit-target-form')
        .should('be.visible')

        cy.get('#edit-target > div > div > .modal-footer > .btn-default')
        .click();

        cy.get('#edit-target-form')
        .should('not.be.visible');
      
    });

})