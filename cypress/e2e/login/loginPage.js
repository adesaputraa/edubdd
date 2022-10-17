// const URL = 'http://zero.webappsecurity.com/login.html'
// const USERNAME = '#user_login'
// const PASSWORD = '#user_password'
// const SIGN_IN = 'input[name="submit"]'


// class LoginPage{
//     static visit() {
//         cy.visit(URL)
//         cy.url().should('include', 'login.html')
//     }

//     static fillUsername(username){
//         cy.get(USERNAME).type(username)
//     }

//     static fillPassword(password){
//         cy.get(PASSWORD).type(password)
//     }

//     static signIn(){
//         cy.get(SIGN_IN).click()
//     }
// }


// export default LoginPage


const URL = 'http://zero.webappsecurity.com'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'input[name="submit"]'
const INPUT = "#searchTerm"
const ENTER = 'online {enter}'
const ACCOUNT_ACTIVITY = '#account_summary_tab'

class PageGlobal{
    static visit() {
            cy.visit(URL+'/index.html')
            cy.url().should('include', '/index.html')

        }
        
        static fillSearch(){
                cy.get(INPUT).type(ENTER)
       }
    
    static visitLogin() {
        cy.visit(URL+'/login.html')
        cy.url().should('include', '/login.html')
    }
    static visitAccount() {
        cy.get(ACCOUNT_ACTIVITY).click()
        cy.url().should('include', '/bank/account-summary.html')
    }


    static fillUsername(username){
        cy.get(USERNAME).type(username)
    }

    static fillPassword(password){
        cy.get(PASSWORD).type(password)
    }

    static signIn(){
        cy.get(SIGN_IN).click()
    }
}


export default PageGlobal
