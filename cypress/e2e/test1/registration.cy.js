describe ('Registration', () => {
    const userEmail = 'test1@gmail.com'
    const firstName = 'Aleksandr'
    const lastName = 'Sharavar'
    const password = '123456789Qw'

    it('Registration test', () => {
        cy.visit('https://grinfer.com/');
        cy.viewport(1920,1080);
        cy.get('[class="sc-2aalce-3 lhBODx"]')
        .should('be.visible')
        .click();
        cy.get('#email').type(userEmail).should('have.value', userEmail);
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#password').type(password);
        cy.get('[data-e2e="submit-form-button"]').should('be.visible').click() ;

    })
})