sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapb1/servicecall/test/integration/FirstJourney',
		'sapb1/servicecall/test/integration/pages/ServiceCallsList',
		'sapb1/servicecall/test/integration/pages/ServiceCallsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ServiceCallsList, ServiceCallsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapb1/servicecall') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheServiceCallsList: ServiceCallsList,
					onTheServiceCallsObjectPage: ServiceCallsObjectPage
                }
            },
            opaJourney.run
        );
    }
);