
/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const searchPage = require("../search/SearchPage");


Given('I on Zero Bank home page', () => {
    searchPage.visit()
});

When('I am fill search text box with "online" keywords and Enter', () => {
    searchPage.fillSearch()
})

Then('I have to see a list that matches my keywords', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
    cy.get('a').contains('Zero - Free Access to Online Banking').click()
    cy.url().should('include', '/online-banking.html')
})
