describe("Scroll", () => {
    it("Test scroll and imitation Enter", () => {
        cy.visit("https://unsplash.com/");
        cy.get('[class="UyEbs gdt34"]').type("car{enter}");
        cy.get('h1[data-test="page-header-title"]').should('have.text', "Car");
        cy.scrollTo(0, 4500);
        cy.get(':nth-child(1) > :nth-child(7) > .YdIix > :nth-child(1) > .MbNnd > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]').click()
        cy.get('.GizhZ > .MssrA > .yzAnJ > .yayNa > div > .N2odk').click()
        cy.get('.dJnu9').should('have.text', "Mateusz Delegacz")
    })
})