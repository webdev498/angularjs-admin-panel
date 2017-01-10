(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('NotificationsPanelController', NotificationsPanelController);

    /* @ngInject */
    function NotificationsPanelController($scope, $http, $mdSidenav, $state, API_CONFIG) {
        var vm = this;
        // sets the current active tab
        vm.close = close;
        vm.currentTab = 0;
        vm.notificationGroups = [{
            name: 'Twitter',
            notifications: [{
                title: 'Mention from oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            },{
                title: 'Oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            },{
                title: 'Oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            },{
                title: 'Followed by Oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            }]
        },{
            name: 'Server',
            notifications: [{
                title: 'Server Down',
                icon: 'icon-error',
                iconColor: 'rgb(244, 67, 54)',
                date: moment().startOf('hour')
            },{
                title: 'Slow Response Time',
                icon: 'icon-warning',
                iconColor: 'rgb(255, 152, 0)',
                date: moment().startOf('hour')
            },{
                title: 'Server Down',
                icon: 'icon-error',
                iconColor: 'rgb(244, 67, 54)',
                date: moment().startOf('hour')
            }]
        },{
            name: 'Sales',
            notifications: [{
                title: 'Triangular Admin $21',
                icon: 'icon-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Lambda WordPress $60',
                icon: 'icon-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Triangular Admin $21',
                icon: 'icon-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Triangular Admin $21',
                icon: 'icon-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Lambda WordPress $60',
                icon: 'icon-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Triangular Admin $21',
                icon: 'icon-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            }]
        }];
        vm.openMail = openMail;
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

        vm.statisticsGroups = [{
            name: 'ADMIN.NOTIFICATIONS.USER_STATS',
            stats: [{
                title: 'ADMIN.NOTIFICATIONS.STORAGE_SPACE',
                mdClass: 'md-primary',
                value: 60
            },{
                title: 'ADMIN.NOTIFICATIONS.BANDWIDTH_USAGAE',
                mdClass: 'md-accent',
                value: 10
            },{
                title: 'ADMIN.NOTIFICATIONS.MEMORY_USAGAE',
                mdClass: 'md-warn',
                value: 100
            }]
        },{
            name: 'ADMIN.NOTIFICATIONS.SERVER_STATS',
            stats: [{
                title: 'ADMIN.NOTIFICATIONS.STORAGE_SPACE',
                mdClass: 'md-primary',
                value: 60
            },{
                title: 'ADMIN.NOTIFICATIONS.BANDWIDTH_USAGAE',
                mdClass: 'md-accent',
                value: 10
            },{
                title: 'ADMIN.NOTIFICATIONS.MEMORY_USAGAE',
                mdClass: 'md-warn',
                value: 100
            }]
        }];

        ////////////////

        // add an event to switch tabs (used when user clicks a menu item before sidebar opens)
        $scope.$on('triSwitchNotificationTab', function($event, tab) {
            vm.currentTab = tab;
        });

        // fetch some dummy emails from the API
        $http({
            method: 'GET',
            url: API_CONFIG.url + 'email/inbox'
        }).success(function(data) {
            vm.emails = data.slice(1,20);
        });

        function openMail() {
            $state.go('private.admin.toolbar.inbox');
            vm.close();
        }

        function close() {
            $mdSidenav('notifications').close();
        }
    }
})();