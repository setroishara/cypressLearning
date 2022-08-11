describe("Log in", function() {
    it(" Sign in", function () {
        cy.visit("https://unsplash.com/")
        cy.contains("Log in").click()
        cy.get('input[type="email"]').type('testqa@ret.com')
        cy.get('input[type="password"]').type('1234567890')
        cy.get('input[type="submit"]').click()
    })
})