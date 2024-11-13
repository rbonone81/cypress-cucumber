import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from './loginPage'

Given('I am on login page', () => {
    loginPage.visitLoginPage()
})

When('I type email with {string}', user => {
    loginPage.typeUser(user)
})

When('I type password with {string}', password => {
    loginPage.typePassword(password)
})

When('I click on submit button', () => {
    loginPage.submit()
})

Then('I have a successful login', () => {
    cy.dashboardValidation()
})