sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sapb1.servicecall',
            componentId: 'ServiceCallsList',
            contextPath: '/ServiceCalls'
        },
        CustomPageDefinitions
    );
});