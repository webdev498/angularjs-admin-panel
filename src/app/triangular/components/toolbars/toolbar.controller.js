(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('DefaultToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController($scope, $mdMedia, $translate, $state, $element, $filter, $mdUtil, $mdSidenav, $mdToast, $timeout, triBreadcrumbsService, triSettings, triLayout) {
        var vm = this;
        vm.breadcrumbs = triBreadcrumbsService.breadcrumbs;
        vm.emailNew = false;
        vm.languages = triSettings.languages;
        vm.openSideNav = openSideNav;
        vm.hideMenuButton = hideMenuButton;
        vm.switchLanguage = switchLanguage;
        vm.toggleNotificationsTab = toggleNotificationsTab;

        // initToolbar();

        ////////////////

        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }

        function switchLanguage(languageCode) {
            $translate.use(languageCode)
            .then(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('MESSAGES.LANGUAGE_CHANGED'))
                    .position('bottom right')
                    .hideDelay(500)
                );
            });
        }

        function hideMenuButton() {
            return triLayout.layout.sideMenuSize !== 'hidden' && $mdMedia('gt-md');
        }

        function toggleNotificationsTab(tab) {
            $scope.$parent.$broadcast('triSwitchNotificationTab', tab);
            vm.openSideNav('notifications');
        }

        $scope.$on('newMailNotification', function(){
            vm.emailNew = true;
        });
    }
})();