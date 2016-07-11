'use strict';
angular
.module('app')
.constant('hostConfig', {
    WEB_API_BASE: 'http://dev.camapp.com.ar:51515'
})
.constant('COMMON_CONFIG', {
    MEGABYTE: 1024 * 1024,
    MAX_FILE_SIZE: 4 * 1024 * 1024,
    PROJECT_MIN_LENGTH: 12
});
