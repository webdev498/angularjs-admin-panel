(function() {
    'use strict';
 
    angular
        .module('app.contents.contacts')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/contents/contacts');

        $stateProvider
        .state('triangular.admin-default.contacts-organizations', {
            url: '/contacts/organizations',
            templateUrl: 'app/contents/contacts/organizations.tmpl.html',
            controller: 'OrganizationsController',
            controllerAs: 'vm'
        })

        triMenuProvider.addMenu({
            name: 'MENU.CONTACTS.CONTACTS',
            icon: 'icon-contacts',
            type: 'dropdown',
            priority: 2.1,
            children: [{
                name: 'MENU.CONTACTS.ORGANIZATIONS',
                state: 'triangular.admin-default.contacts-organizations',
                type: 'link'
            }]
        });
    }
})();