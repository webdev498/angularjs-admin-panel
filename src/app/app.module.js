(function() {
    'use strict';

    angular
        .module('app', [
			'triangular','ngAnimate','ngCookies','ngTouch','ngSanitize','ngMessages','ngMaterial',

			// inject extra 3rd party angular modules
			'ui.router','pascalprecht.translate','LocalStorageModule','googlechart','chart.js','linkify','ui.calendar','angularMoment','textAngular','uiGmapgoogle-maps','hljs','angular-jwt','restangular','md.data.table','ui.gravatar',
			// 'seed-module'
			// uncomment above to activate the example seed module
			'app.contents'
        ]) 
        // create a constant for languages so they can be added to both triangular & translate
        .constant('APP_LANGUAGES', [{
            name: 'LANGUAGES.CHINESE',
            key: 'zh'
        },{
            name: 'LANGUAGES.ENGLISH',
            key: 'en' 
        },{
            name: 'LANGUAGES.FRENCH',
            key: 'fr'
        },{
            name: 'LANGUAGES.PORTUGUESE',
            key: 'pt'
        }])
        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://192.168.166.2:8001/'
        })
        // set RestAngularProvider information

        .config(function(RestangularProvider,API_CONFIG){
            RestangularProvider
            .setBaseUrl(API_CONFIG.url + '/api')
            .setParentless(true)
            .setDefaultHeaders({
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json'
            });

            RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
                var extractedData = {};
                if (data) {
                    extractedData = data.data;
                    extractedData.meta = data.meta;
                    extractedData.included = data.included;
                }
                function _apply(elem, fct) {
                    if (elem !== undefined && elem !== null) {
                        if (elem.type !== undefined) {
                            fct(elem);
                        } else {
                            _.forEach(elem, function (el) {
                                _apply(el, fct);
                            });
                        }
                    }
                }

                _apply(data.data, function (elem) {
                    _apply(elem.relationships, function (rel) {
                        rel.getIncluded = function () {
                            return _.find(extractedData.included, function (included) {
                                var a = included.type == rel.type;
                                var b = included.id == rel.id;
                                return a && b;
                            });
                        };
                    });
                });
                return extractedData;
            });
        });
})();