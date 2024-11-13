const URL = 'https://www.saucedemo.com/v1/'
const USERNAME_IMPUT = '[data-test="username"]'
const PASSWORD_IMPUT = '[data-test="password"]'
const SUBMIT_BUTTON = '#login-button'

class loginPage {
    static visitLoginPage() {
        cy.visit(URL)
    }

    static typeUser(user) {
        cy.get(USERNAME_IMPUT).type(user)
    }

    static typePassword(password) {
        cy.get(PASSWORD_IMPUT).type(password)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default loginPage