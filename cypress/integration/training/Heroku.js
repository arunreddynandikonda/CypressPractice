/// <reference types="Cypress" />

describe('Heroku',function()
{
    this.beforeEach('Heroku site', function() {
        
        cy.visit('https://the-internet.herokuapp.com/') 
    
    })

    it('abTesting', function()
     { 
       cy.get('a[href="/abtest"]').click()
       cy.get('h3').should('include.text','A/B Test')
    })

    it('checkboxes',function() {

        cy.get('a[href="/checkboxes"]').click()
        cy.get('form input:nth-child(1)').check().should('be.checked')
    })

    it('dropdown',function() {

        cy.get('a[href="/dropdown"]').click()
        cy.get('select').select('2').should('have.value','2')
    })

    it('contextMenu',function() {

        cy.get('a[href="/context_menu"]').click()
        cy.get('#hot-spot').rightclick()
        cy.on('window:alert', (string)=>{
            expect(string).to.equal('You selected a context menu')
        })
    })
    
    it('multipleWindows',function() {
        
        cy.get('a[href="/windows"]').click()
        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click()
        cy.get('h3').should('include.text','New Window')
    })

    it('alerts',function(){

        cy.get('a[href="/javascript_alerts"]').click()
        cy.get('button[onclick="jsAlert()"]').click
        cy.get('button[onclick="jsConfirm()"]').click
        cy.on('window:alert', (string)=>{

            expect(string).to.equal('I am a JS Alert')
        })

        cy.on('window:confirm', (str)=>
        {

            expect(str).to.equal('I am a JS Confirm')
        })

    })

})