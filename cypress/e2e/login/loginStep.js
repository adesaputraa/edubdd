/// <reference types="cypress" />


import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from './loginPage';
const LoginPage = require("./loginPage");

Given('I open login page', () => {
    LoginPage.visit
})


When('I submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.signIn
})


Then('I should see homepage', () => {
    cy.wait(1000)
    cy.get('#account_summary_tab').should('be.visible')
})