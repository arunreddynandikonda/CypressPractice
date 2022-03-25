describe('Cricbuzz',function()
{
    it('Score Validation',function()
    {
        cy.visit('https://www.cricbuzz.com/')
        // cy.get('a[href="/cricket-schedule/series"]:nth-child(1)').trigger('mouseover')
        cy.get('div[title="Cricket Series"] nav a').each((series, index, list)=>
        {
            if(series.text().includes('New Zealand'))
            {
                cy.wrap(series).click({force:true})
            }
        })
        let firstTeamTotalScore 
        let secondTeamTotalScore
        cy.get('nav[role="navigation"] a[class="cb-nav-tab"]:nth-child(2)').click()
        cy.get('div[class="cb-col-100 cb-col cb-series-matches ng-scope"]').find('a[class="text-hvr-underline"]').click()
        cy.get('nav[role="navigation"] a:nth-child(2)').click()
        let runsScoredByFirstTeam = 0
        var firstTeamRunsArray = []
        cy.get('div[id="innings_1"] div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]:nth-child(1) div[class="cb-col cb-col-8 text-right text-bold"]').each((runsElement)=>
        {
            var runs = Number(runsElement.text())
            firstTeamRunsArray.push(runs)
        }).then(function()
        {
            // for(let i=1; i<firstTeamRunsArray.length; i++)
            // {
            //     runsScoredByFirstTeam = runsScoredByFirstTeam + firstTeamRunsArray[i]
            // }
            var runsScoredByFirstTeam = firstTeamRunsArray.reduce((runsScored,runs)=>runsScored+runs,0)
        })
        cy.get('div[class="cb-col cb-col-8 text-bold cb-text-black text-right"]:nth-child(2)').then(function(extrasString)
        {
            var firstTeamExtras = parseInt(extrasString.text())
            var firstTeamTotalScore = runsScoredByFirstTeam + firstTeamExtras
            // cy.log(firstTeamTotalScore)
        })
        let runsScoredBySecondTeam = 0
        var secondTeamRunsArray = []
        cy.get('div[id="innings_2"] div[class="cb-col cb-col-100 cb-ltst-wgt-hdr"]:nth-child(1) div[class="cb-col cb-col-8 text-right text-bold"]').each((runsElement)=>
        {
            var runs = Number(runsElement.text())
            secondTeamRunsArray.push(runs)
        }).then(function()
        {
            for(let i=1; i<secondTeamRunsArray.length; i++)
            {
                runsScoredBySecondTeam = runsScoredBySecondTeam + secondTeamRunsArray[i]
            }
        })
        cy.get('div[id="innings_2"] div[class="cb-col cb-col-8 text-bold cb-text-black text-right"]').then(function(extrasString)
        {
            var secondTeamExtras = parseInt(extrasString.text())
            var secondTeamTotalScore = runsScoredBySecondTeam + secondTeamExtras
            // cy.log(secondTeamTotalScore)
        }).then(function()
        {
        if(firstTeamTotalScore>secondTeamTotalScore)
        {
            cy.log('First Batting Team Won')
        }else
        {
            cy.log('Second Batting Team Won')
        }
        })


    })
})