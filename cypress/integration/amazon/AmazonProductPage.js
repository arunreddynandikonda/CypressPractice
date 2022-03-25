class AmazonProductPage
{

    getProductPrices()
    {
        return cy.get('.a-price span[class="a-price-whole"]')
    }

    getProductNames()
    {
        return cy.get('span[class="a-size-medium a-color-base a-text-normal"]')
    }

    getMin()
    {
        return cy.get('#low-price')
    }

    getMax()
    {
        return cy.get('#high-price')
    }

    getGo()
    {
        return cy.get('.a-button-input')
    }

}

export default AmazonProductPage