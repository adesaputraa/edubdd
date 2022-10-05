/// <reference types="cypress" />


import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I on web page zero', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

And('I am fill search text box with', () => {
    cy.get('#searchTerm').type('zero')
})

When('I push enter', () => {
    cy.get('#searchTerm').type('zero {enter}')
})


Then('I have to see a list that matches my keywords', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})