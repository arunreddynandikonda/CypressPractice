class ProductsPage
{

    getProducts() 
    {
        return cy.get('a[class="a-link-normal a-text-normal"]')
        // return cy.get('div[data-asin="B09JR4ZM9L"] a[class="a-link-normal a-text-normal"]')
    }
}

export default ProductsPage