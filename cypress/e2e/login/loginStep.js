
/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const loginPage = require("../login/LoginPage");


Given('I open login page', () => {
   loginPage.visitLogin()
});

When('I submit login', () => {
   loginPage.fillUsername("username")
   loginPage.fillPassword("password")
   loginPage.signIn()
})

Then('I should see homepage', () => {

   loginPage.visitAccount()
   cy.contains('username').click()
   cy.get('#logout_link').click()
   cy.url().should('include', 'index.html')
   loginPage.fillSearch()
})
