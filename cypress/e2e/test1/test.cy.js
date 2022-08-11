import Login from './PageObject/login'

describe('Assert', () => {


    const login = new Login();
    it('Assert web test', () => {
        cy.visit("https://unsplash.com/")
        cy.location('protocol').should('eq','https:')
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')
        
        login.btnLogin()
        .should('be.visible')
        .click()
        
        login.fealdEmail()
        .type('qwerty@gmail.com')
        .should('have.value', 'qwerty@gmail.com')

        login.fealdPass()
        .type('1234567')
        .should('have.value', '1234567')

        login.clickBtnLogin()
        .should('be.visible')
        .click()

        cy.contains('Invalid email or password.')
        .should('be.visible')
    })
})