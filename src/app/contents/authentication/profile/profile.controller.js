(function() {
    'use strict';

    angular
        .module('app.contents.authentication')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController() {
        var vm = this;
        vm.settingsGroups = [{
            name: 'ADMIN.NOTIFICATIONS.ACCOUNT_SETTINGS',
            settings: [{
                title: 'ADMIN.NOTIFICATIONS.SHOW_LOCATION',
                icon: 'icon-location-on',
                enabled: true
            },{
                title: 'ADMIN.NOTIFICATIONS.SHOW_AVATAR',
                icon: 'icon-face-unlock',
                enabled: false
            },{
                title: 'ADMIN.NOTIFICATIONS.SEND_NOTIFICATIONS',
                icon: 'icon-notifications-on',
                enabled: true
            }]
        },{
            name: 'ADMIN.NOTIFICATIONS.CHAT_SETTINGS',
            settings: [{
                title: 'ADMIN.NOTIFICATIONS.SHOW_USERNAME',
                icon: 'icon-person',
                enabled: true
            },{
                title: 'ADMIN.NOTIFICATIONS.SHOW_PROFILE',
                icon: 'icon-account-box',
                enabled: false
            },{
                title: 'ADMIN.NOTIFICATIONS.ALLOW_BACKUPS',
                icon: 'icon-backup',
                enabled: true
            }]
        }];
        vm.user = {
            name: 'Christos',
            email: 'info@oxygenna.com',
            location: 'Sitia, Crete, Greece',
            website: 'http://www.oxygenna.com',
            twitter: 'oxygenna',
            bio: 'We are a small creative web design agency \n who are passionate with our pixels.',
            current: '',
            password: '',
            confirm: ''
        };
    }
})();