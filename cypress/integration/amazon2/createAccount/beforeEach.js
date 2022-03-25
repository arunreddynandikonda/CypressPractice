beforeEach(function()
{
    cy.fixture('amazon2').then(function(data)
        {
            this.data = data
        })
})