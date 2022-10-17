
/// <reference types="cypress"/>
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
const loginPage = require("../login/LoginPage");


Given('I open login page', () => {
   loginPage.visit()
});

When('I submit login', () => {
   loginPage.fillUsername("username")
   loginPage.fillPassword("password")
   loginPage.signIn()
})

Then('I should see homepage', () => {
   cy.wait(1000)
   cy.get('#account_summary_tab').should('be.visible')
})
