(function() {
    'use strict';

    angular
        .module('app.contents.authentication')
        .controller('ForgotController', ForgotController);

    /* @ngInject */
    function ForgotController($scope, $state, $mdToast, $filter, $http, triSettings, API_CONFIG) {
        var vm = this;
        vm.triSettings = triSettings;
        vm.user = {
            email: ''
        };
        vm.resetClick = resetClick;

        ////////////////

        function resetClick() {
            $http({
                method: 'POST',
                url: API_CONFIG.url + 'reset',
                data: $scope.user
            }).
            success(function(data) {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('FORGOT.MESSAGES.RESET_SENT') + ' ' + data.email)
                    .position('bottom right')
                    .action($filter('translate')('FORGOT.MESSAGES.LOGIN_NOW'))
                    .highlightAction(true)
                    .hideDelay(0)
                ).then(function() {
                    $state.go('public.auth.login');
                });
            }).
            error(function(data) {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('FORGOT.MESSAGES.NO_RESET') + ' ' + data.email)
                    .position('bottom right')
                    .hideDelay(5000)
                );
            });
        }
    }
})();
