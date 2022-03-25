import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LandingPage from "../pages/LandingPage"
import ProductsPage from "../pages/ProductsPage"
import ProductPage from "../pages/ProductPage"
import CartPage from "../pages/CartPage"

const landingPage = new LandingPage
const productsPage = new ProductsPage
const productPage = new ProductPage
const cartPage = new CartPage

Given('User Is On LandingPage',function()
{
    cy.visit(Cypress.env('url'))
         
})

let value;

When('User Search The Product',function(dataTable)
{
    landingPage.getSearchBox().type(dataTable.rawTable[1][0])
    landingPage.getSuggestions().each((suggestion)=>
    {
        if(suggestion.text()===dataTable.rawTable[1][1])
            {
                suggestion.click()
            }
    })
})

And('User Selects The Product',function(dataTable)
{
    productsPage.getProducts().each((product)=>
    {

        if(product.text().includes(dataTable.rawTable[1][0]))
        {
            cy.wrap(product).invoke('removeAttr','target').click()
            var full = product.text().split('(')
            var first = full[0].trim()
            value = first
            // cy.log(expected)
        }
    })  
    productPage.getAddToCartButton().click()
})

Then('Product Appears in Cart',function()
{
    landingPage.getCartButton().click()
    cartPage.getProductName().then(function(productName)
    {
        var full = productName.text().split('(')
        var actual = full[0].trim()
        expect(actual).to.equal(value)
        
    })
})
