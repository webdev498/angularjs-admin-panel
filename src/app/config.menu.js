(function() {
    'use strict';

    angular
        .module('app')
        .config(menuConfig);

    /* @ngInject */
    function menuConfig() {
        // TODO add test menu here
        // triMenuProvider.addMenu({
        //     name: 'MENU.ELEMENTS.ELEMENTS',
        //     icon: 'icon-school',
        //     type: 'dropdown',
        //     priority: 3.1,
        //     children: [{
        //         name: 'MENU.ELEMENTS.BUTTONS',
        //         type: 'link',
        //         state: 'triangular.admin-default.test-page'
        //     }]
        // });
    }
})();