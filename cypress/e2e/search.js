/// <reference types="cypress"/>
// import function from module cypress-cucumber-preprocessor
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const URL = 'http://zero.webappsecurity.com/index.html'


Given('I on Zero Bank home page', () => {
    cy.visit(URL)

})
    

When('I am fill search text box with "online" keywords and Enter', () => {
    cy.get('#searchTerm').type('online {enter}')
})

Then('I should a list that match with my keywords', ()=>{
    cy.wait(1000)
    cy.get('a').contains('Zero - Free Access to Online Banking').click()
    cy.url().should('include', '/online-banking.html')
})