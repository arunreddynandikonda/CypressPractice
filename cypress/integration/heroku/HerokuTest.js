import LandingPage from '../Heroku/LandingPage';
import ABTestingPage from '../Heroku/ABTestingPage';
import ContextmenuPage from '../Heroku/ContextMenuPage';
import MultipleWindowsPage from '../Heroku/MultipleWindowsPage';

const landingPage = new LandingPage()
const abTestingPage = new  ABTestingPage()
const contextMenuPage = new ContextmenuPage()
const multipleWindowsPage = new MultipleWindowsPage()
describe('heroku',function()
{
    beforeEach('url',function()
    {
        landingPage.getUrl()
    })

    it('abTesting',function()
    {
        landingPage.getABTestingLink().click()
        abTestingPage.getElement().should('include.text','A/B Test')
    })

    it('contexMenu',function()
    {
        landingPage.getContextMenu().click()
        contextMenuPage.getBox().rightclick()
        cy.on('window:alert', (string)=>{
            
            expect(string).to.equal('You selected a context menu')
        })
    })
    
    it('multipleWindows',function()
    {
        landingPage.getMultipleWindows().click()
        multipleWindowsPage.getClickHereLink().invoke('removeAttr','target').click()
        multipleWindowsPage.getText().should('include.text','New Window')
    })
}) 