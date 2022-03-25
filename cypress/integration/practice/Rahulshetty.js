/// <reference types="Cypress" />

const { listenerCount } = require("process")

describe('tables',function()
{
 
    it('Greenccart',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword')
        cy.get('.products button').click({multiple:true})
        cy.get('.cart-icon > img').click()
        cy.get('.action-block button:visible').click()
        let sum = 0
        cy.get('tbody td:nth-child(4)').each(($e) => {
            
            sum = sum + +($e.text())
        })
        cy.get('.totAmt').then(function(actualTotalAmountString) {

        // const actualTotalString = actualTotalAmountString.text()
        // cy.log(typeof(actualTotalString))
        // const actualTotal = parseInt(actualTotalString)
        const actualTotal = parseInt(actualTotalAmountString.text())
        expect(actualTotal).to.equal(sum)
        })
    })

    it('ProtoCommerce',function()
    {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        cy.get('a[href="/angularpractice/shop"]').click()
        cy.selectProduct('iphone X')
        cy.selectProduct('Samsung Note 8')
        cy.get('a[class="nav-link btn btn-primary"]').click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each((priceElements) =>
        {
            var stringPrices = priceElements.text().split(" ")
            sum = sum + parseInt(stringPrices[1])
        })
        cy.get('h3 > strong').then(function(actualTotalString)
        {
            var actualTotalString = actualTotalString.text().split(" ")
            var actualTotal = parseInt(actualTotalString[1])
            expect(actualTotal).to.equal(sum) 
        })
    })

    it.skip('topDeals',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="#/offers"]').invoke('removeAttr','target').click()
        cy.get('select').select('10')
        cy.get('[aria-sort="descending"]').click()
        var productsArray = []
        var sortedArray = []
        cy.get('tr td:nth-child(1)').each((products, index, list) =>
        {
            productsArray.push(products.text())
        }).then(function()
        {
            sortedArray = productsArray.sort()
            expect(sortedArray).to.deep.equal(productsArray)
        })

    })

})