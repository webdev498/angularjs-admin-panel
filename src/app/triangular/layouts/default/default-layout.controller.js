'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
(function() {
    'use strict';

    angular
        .module('triangular.layouts')
        .controller('DefaultLayoutController', DefaultLayoutController);

    /* @ngInject */
    function DefaultLayoutController($scope, $element, triLayout) {
        // we need to use the scope here because otherwise the expression in md-is-locked-open doesnt work
        $scope.layout = triLayout.layout; //eslint-disable-line
        var vm = this;

        vm.activateHover = activateHover;
        vm.removeHover  = removeHover;

        ////////////////

        function activateHover() {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').addClass('hover');
            }
        }

        function removeHover () {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').removeClass('hover');
            }
        }
    }
})();