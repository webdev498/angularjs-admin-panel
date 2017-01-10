(function() {
    'use strict';

    angular
        .module('triangular.components')
        .provider('triMenu', menuProvider);


    /* @ngInject */
    function menuProvider() {
        // Provider
        var menu = [];

        this.addMenu = addMenu;

        function addMenu(item) {
            menu.push(item);
        }

        // Service
        this.$get = function() {
            return {
                menu: menu
            };
        };
    }
})();

