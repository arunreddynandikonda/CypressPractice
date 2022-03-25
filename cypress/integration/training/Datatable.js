const testData = require("../../fixtures/example.json")

describe('datadriven', function() 
{
    // before('initialinzing', function()
    // {

    //     cy.fixture('example').then(function(data)
    //     {
    //         this.data = data
    //     })
    // })
    // 
    // it('gettingdata',function()
    // {

    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.log(this.data.name)
    //     cy.log(this.data.email)
    // })

    testData.forEach((data) => 
    { 
         
         it('testdata', function()
         { 

            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
            cy.log(data.name)
            cy.log(data.email)    
         }) 
     })
})