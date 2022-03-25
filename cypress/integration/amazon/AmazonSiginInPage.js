class AmazonSiginInPage
{

    getEmail()
    {
        return cy.get('input[type="email"]')
    }

    getContinueButton()
    {
        return cy.get('#continue')
    }

    getPassword()
    {
        return cy.get('input[type="password"]')
    }

    getSignInButton()
    {
        return cy.get('#signInSubmit')
    }

    getErrorMessage()
    {
        return cy.get('.a-list-item')
    }

}

export default AmazonSiginInPage