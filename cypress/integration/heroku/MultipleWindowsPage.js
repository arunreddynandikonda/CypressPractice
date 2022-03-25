class MultipleWindowsPage
{

    getClickHereLink()
    {
        return cy.get('a[href="/windows/new"]')
    }

    getText()
    {
        return cy.get('h3')
    }
}

export default MultipleWindowsPage