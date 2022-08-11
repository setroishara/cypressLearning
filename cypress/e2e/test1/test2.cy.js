describe('Rozetka', () => {
    it('By', () => {
        cy.viewport(1920, 1080)
        cy.visit("https://rozetka.com.ua/")
        cy.get('.search-form__input').type("Iphone 13 pro max")
        cy.contains('search-form >.search-form__submit').click()
        cy.contains('Мобільний телефон Apple iPhone 13 Pro Max 128 GB Alpine Green Офіційна гарантія').click()
        cy.get('.ng-star-inserted').click()
    })
})