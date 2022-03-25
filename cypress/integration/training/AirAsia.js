describe('AirAsia',function()
{


    it('ticketBooking',function() 

    {

    cy.visit('https://www.airasia.co.in/home')
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    cy.get('div[style="width: 50%; border-right: 2px solid rgb(112, 112, 112);"] div[id="One Way"]').click()
    cy.get('[data-testid=source-field] > .flight-search-source-field-read-only').type('de')
    cy.get('.recent-list-items button').contains('New Delhi').click() 
    cy.get('div[class="flight-search-source-feild-input"] input[aria-describedby="basic-addon3"]').type('g')
    cy.get('.recent-list-items button').contains('Goa').click()
    })
    
     
})
