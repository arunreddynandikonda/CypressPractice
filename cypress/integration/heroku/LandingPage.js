class LandingPage 
{

    getUrl()
    {
        return cy.visit('https://the-internet.herokuapp.com/')
    } 

    getABTestingLink()
    {
        return cy.get('a[href="/abtest"]')
    }

    getCheckboxesLink() 
    {
        return cy.get('a[href="/checkboxes"]')
    }

    getDropdownLink()
    {
        return cy.get('a[href="/dropdown"]')
    }

    getContextMenu()
    {
        return cy.get('a[href="/context_menu"]')
    }

    getMultipleWindows()
    {
        return cy.get('a[href="/windows"]')
    }

}

export default LandingPage