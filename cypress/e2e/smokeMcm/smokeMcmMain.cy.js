import Service from './service.js';
import mcm from '../../fixtures/mcmSettings.json'

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

    it('1 case: visibility dashbords on main page', () => {
     cy.get('.highcharts-background')
     .should('be.visible');
     cy.get('ul.secondary-menu.nav.navbar-nav > li:nth-child(1) > a')
     .should('be.visible');
     cy.get('ul.secondary-menu.nav.navbar-nav > li:nth-child(2) > a')
     .should('be.visible');
     cy.get('ul.secondary-menu.nav.navbar-nav > li:nth-child(3) > a')
     .should('be.visible');
     cy.get('ul.secondary-menu.nav.navbar-nav > li:nth-child(4) > a')
     .should('be.visible');
     cy.get('ul.secondary-menu.nav.navbar-nav > li:nth-child(5) > a')
     .should('be.visible');
    })

   
})