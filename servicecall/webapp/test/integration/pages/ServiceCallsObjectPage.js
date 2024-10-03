sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sapb1.servicecall',
            componentId: 'ServiceCallsObjectPage',
            contextPath: '/ServiceCalls'
        },
        CustomPageDefinitions
    );
});