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
        cy.get('#navbar-collapse-1 > span')
        .should('be.visible');      
    })

    it('2 case: visibility dashbords', () => {
     cy.get('.highcharts-background')
     .should('be.visible');
     cy.get('[ui-sref="content"]')
     .should('be.visible');
     cy.get('[ui-sref="target"]')
     .should('be.visible');
     cy.get('[ui-sref="distribution"]')
     .should('be.visible');
     cy.get('[ui-sref="reports"]')
     .should('be.visible');
     cy.get('[ui-sref="conference"]')
     .should('be.visible');
    })

   
})