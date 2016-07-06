'use strict';
angular
.module('camApp')
.constant('SERVICE_CONSTANTS',
(function () {
    var notificationServiceUrl = "umbraco/CrossOver/NotificationApi/";

    return {
        APPLY: notificationServiceUrl + 'ApplyTrip'
    };
})());