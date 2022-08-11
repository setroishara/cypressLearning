describe('Grifin', () => {
    it('Test element', () => {
        cy.visit("https://grinfer.com/");
        cy.viewport(1920, 1080);
        cy.get('[class="sc-1q9s0sp-4 iRbhTm"]').type("Sport{enter}").wait(4000);
        
        //cy.get('[cdata-e2e="course-card-title,"]').first().click();
        cy.get(':nth-child(1) > .sc-g7i5pe-1 > .sc-1m292s3-1 > .sc-1m292s3-0').click();
        cy.get('[class="sc-1xj3xob-0 ezBrmu sc-1dqgp31-2 dLiCGc"]').click();
    })
})