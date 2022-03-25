class AmazonlandingPage 
{

    getSignInButton()
    {
        return cy.get('#nav-link-accountList')
    }

    getSearchBox()
    {
        return cy.get('input[aria-label="Search"]')
    }

    getSearchButton()
    {
        return cy.get('#nav-search-submit-button')
    }

    getSuggestions()
    {
        return cy.get('.s-suggestion')
    }

} 

export default AmazonlandingPage 