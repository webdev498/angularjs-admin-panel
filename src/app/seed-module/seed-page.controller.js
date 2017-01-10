(function() {
    'use strict';

    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);

    /* @ngInject */
    function SeedPageController() {
        var vm = this;
        vm.testData = ['triangular', 'is', 'great'];
    }
})();