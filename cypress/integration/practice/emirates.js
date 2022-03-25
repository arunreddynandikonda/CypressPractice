describe('Emirates',function()
{


    it('ticketBooking',function() 

    {

    cy.visit('https://www.emirates.com/in/english/')
    cy.wait(30000) 
    cy.get('#d732cbca-7192-4d43-b24c-6f6b3c7649bf').type('de')
    cy.get('.search-flight__section > :nth-child(4) > :nth-child(1) > .medium--four-fifths > .grid > :nth-child(1) > .js-dropdown-v2 > .js-origin-dropdown > .dropdown > .location').each(($el, index, $list)=> {
        if($e1.contains('New Delhi')) 
        {
        e1.click()
        }
    }) 
    // cy.get('.recent-list-items button').type('go')
    
     
    })



})