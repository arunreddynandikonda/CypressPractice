import AmazonlandingPage from '../Amazon/AmazonlandingPage';
import AmazonSiginInPage from '../Amazon/AmazonSiginInPage';
import AmazonProductPage from '../Amazon/AmazonProductPage';
import { count } from 'console';

before('Configuration', function() {

    cy.visit(Cypress.env('url'))
    cy.fixture('amazon').then(function(data)
        {
            this.data = data
        })
})
describe('Amazon', function()
{

    it.skip('siginIn', function()
    {
        const landingPage = new AmazonlandingPage()
        const siginPage = new  AmazonSiginInPage()
        landingPage.getSignInButton().click()
        siginPage.getEmail().type(this.data.username)
        siginPage.getContinueButton().click()
        siginPage.getPassword().type(this.data.password)
        siginPage.getSignInButton().click()
        siginPage.getErrorMessage().should('include.text','password is incorrect')
    })

    it('Adding prices', function()
    {

        const landingPage = new AmazonlandingPage()
        const productPage = new AmazonProductPage()
        landingPage.getSearchBox().clear().type(this.data.product)
        landingPage.getSearchButton().click()
        var sum = 0
        productPage.getProductPrices().each((priceElement)=>
        {
            const price = priceElement.text()
            var prices = price.replace(",","")
            sum = sum + parseInt(prices)
        }).then(function()
        {
            cy.log(sum)
        })

    })

    it('Validating Prices', function()
    {

        const landingPage = new AmazonlandingPage()
        const productPage = new AmazonProductPage()
        landingPage.getSearchBox().clear().type(this.data.product)
        landingPage.getSuggestions().each((suggestion) => 
        {
            if(suggestion.text()==="laptops under 60000")
            {
                suggestion.click()
            }
        })
        cy.wait(3000)
        // productPage.getProductNames().each(($e)=>
        // {
        //     cy.log($e.text())
        // })
        let count = 0
        productPage.getProductPrices().each((priceElement, index, list)=>
        {
            const price = priceElement.text()
            var prices = price.replace(",","")
            if(prices>60000){
                // productPage.getProductPrices().eq(index).prevUntil('a[target="_blank"] span[class="a-size-medium a-color-base a-text-normal"]').then(function(productNames)
                // {
                //     cy.log(productNames.text())
                // })
                productPage.getProductNames().eq(index).then(function(productNames)
                {
                    cy.log(productNames.text())
                })
                count++
            }   
        }).then(function()
        {
            if(count==0)
            {
                cy.log('All product price are below 60000')
            }else if(count==1)
            {
                cy.log('One product price is more than 60000')
            }
            else(count>1)
            {
                cy.log(count+' products prices are more than 60000')
            }
        })

    })

    it('Validating Prices on min and max basis', function()
    {

        const landingPage = new AmazonlandingPage()
        const productPage = new AmazonProductPage()
        landingPage.getSearchBox().clear().type(this.data.product)
        landingPage.getSearchButton().click()
        productPage.getMin().type(this.data.minprice)
        productPage.getMax().type(this.data.maxprice)
        productPage.getGo().click()
        let count = 0
        productPage.getProductPrices().each((priceElement, index, list)=>
        {
            const price = priceElement.text()
            var prices = price.replace(",","")
            if(prices>50000 && prices<80000)
            {
                // cy.log('prices are in given range')
            }else
            {

                productPage.getProductNames().eq(index).then(function(productNames)
                {
                    cy.log(productNames.text())
                })
                count++
            }   
        }).then(function()
        {
            if(count==0)
            {
                cy.log('All product price are in given price range')
            }else if(count==1)
            {
                cy.log('One product price is not in given price range')
            }
            else(count>1)
            {
                cy.log(count+' products prices are not in given price range')
            }
        })

    })

})