import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CreateAccountPage from "../pages/createAccountPage"
import LandingPage from "../pages/LandingPage"
import SiginInPage from "../pages/siginInPage"

const landingPage = new LandingPage()
const signInPage = new SiginInPage()
const creatrAccountPage = new CreateAccountPage()

Given('User Navigates To Create Account Page',function()
{
    cy.visit(Cypress.env('url'))
    landingPage.getsignInPopUp().trigger('mouseover').contains('Sign in').click()
    signInPage.getCreateAccountButton().click()     
})

When('User Enter Details',function(dataTable)
{
    creatrAccountPage.getName().type(dataTable.rawTable[1][0])
    creatrAccountPage.getPhoneNumber().type(dataTable.rawTable[1][1])
    creatrAccountPage.getPassword().type(dataTable.rawTable[1][2])
})

// And('User Click On Continue Button',function()
// {
//     creatrAccountPage.getContinueButton().click()
// })
