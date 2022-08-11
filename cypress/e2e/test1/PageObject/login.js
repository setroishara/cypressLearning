class Login {
    btnLogin(){
        return cy.get('a[href="https://unsplash.com/login"]')
    }
    fealdEmail() {
        return cy.get('input[id="user_email"]')

    }
    fealdPass() {
        return cy.get('input[id="user_password"]')
    }
    clickBtnLogin(){
        return cy.get('[class="btn btn-default btn-block-level"]')
    }
}

export default Login



