/**
 * @ngdoc function
 * @name OrganizationsTableController
 * @module nossAppContacts
 * @kind function
 *
 * @description
 *
 * Controller for the table in Organizations page
 */
(function () {
    'use strict';


    angular
        .module('app.contents.contacts')
        .controller('OrganizationsTableController', Controller);

    /* @ngInject */
    function Controller($scope, Restangular, $mdDialog, $q) {
        var organizations = Restangular.all('contacts/organizations');

        var vm = this;
        vm.query = {
            page_size: '10',
            sort: 'name',
            page: 1
        };
        vm.selected = [];
        vm.filter = {
            options: {
                debounce: 500
            }
        };
        vm.getOrgs = getOrgs;
        vm.removeFilter = removeFilter;
        vm.deleteSelected = deleteSelected;

        activate();
        ////////////////

        function activate() {
            var bookmark;
            $scope.$watch('vm.query.filter', function (newValue, oldValue) {
                if (!oldValue) {
                    bookmark = vm.query.page;
                }

                if (newValue !== oldValue) {
                    vm.query.page = 1;
                    vm.getOrgs();
                }

                if (!newValue) {
                    vm.query.page = bookmark;
                }


            });
        }

        function getOrgs() {
            // vm.promise = organizations.getList(vm.query).then(function (orgs) {
            //     vm.orgs = orgs.results;
            // });


            var data = {
                'results': [
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/495',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/495/children',
                        'created_at': '2015-08-24T18:52:16.725805Z',
                        'modified_at': '2015-08-24T18:52:59.128538Z',
                        'name': '1plus1.vision',
                        'nickname': null,
                        'reference': '1PL001',
                        'notes': null,
                        'disabled': false,
                        'parent': null,
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/501',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/501/children',
                        'created_at': '2015-08-24T18:52:17.274059Z',
                        'modified_at': '2015-08-24T18:52:59.460150Z',
                        'name': '2xM Architecture Sauan-Pancini Architecte',
                        'nickname': null,
                        'reference': '2XM001',
                        'notes': null,
                        'disabled': false,
                        'parent': 'http://192.168.166.2:8001/api/contacts/organizations/500',
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/496',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/496/children',
                        'created_at': '2015-08-24T18:52:16.843200Z',
                        'modified_at': '2015-08-24T18:52:59.212893Z',
                        'name': '3Dvisionic',
                        'nickname': null,
                        'reference': '3DV001',
                        'notes': null,
                        'disabled': false,
                        'parent': null,
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/502',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/502/children',
                        'created_at': '2015-08-24T18:52:17.382116Z',
                        'modified_at': '2015-08-24T18:52:59.534957Z',
                        'name': '6 Telecom',
                        'nickname': null,
                        'reference': '6TE001',
                        'notes': null,
                        'disabled': false,
                        'parent': 'http://192.168.166.2:8001/api/contacts/organizations/500',
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/593',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/593/children',
                        'created_at': '2015-08-24T18:52:32.324661Z',
                        'modified_at': '2015-08-24T18:53:11.902092Z',
                        'name': '7150822 Canada Inc.',
                        'nickname': null,
                        'reference': '715001',
                        'notes': null,
                        'disabled': false,
                        'parent': null,
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/598',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/598/children',
                        'created_at': '2015-08-24T18:52:52.037994Z',
                        'modified_at': '2015-08-24T18:53:32.663267Z',
                        'name': '7643497 Canada Inc',
                        'nickname': null,
                        'reference': '764001',
                        'notes': null,
                        'disabled': false,
                        'parent': 'http://192.168.166.2:8001/api/contacts/organizations/451',
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/497',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/497/children',
                        'created_at': '2015-08-24T18:52:16.914730Z',
                        'modified_at': '2015-08-24T18:52:59.261123Z',
                        'name': '7 doigts de la main',
                        'nickname': null,
                        'reference': '7DO001',
                        'notes': null,
                        'disabled': false,
                        'parent': null,
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/596',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/596/children',
                        'created_at': '2015-08-24T18:52:43.479793Z',
                        'modified_at': '2015-08-24T18:53:24.979924Z',
                        'name': '8802807 Canada Inc. (MyCloud.ca)',
                        'nickname': null,
                        'reference': '880001',
                        'notes': null,
                        'disabled': false,
                        'parent': null,
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/498',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/498/children',
                        'created_at': '2015-08-24T18:52:16.980404Z',
                        'modified_at': '2015-08-24T18:52:59.300328Z',
                        'name': '9267-6840 Québec Inc. Print Intl.',
                        'nickname': null,
                        'reference': '926001',
                        'notes': null,
                        'disabled': false,
                        'parent': null,
                        'people': [],
                        'administrators': []
                    },
                    {
                        'url': 'http://192.168.166.2:8001/api/contacts/organizations/499',
                        'permissions': {
                            'view': true,
                            'change': false,
                            'add': false,
                            'delete': false
                        },
                        'children': 'http://192.168.166.2:8001/api/contacts/organizations/499/children',
                        'created_at': '2015-08-24T18:52:17.099827Z',
                        'modified_at': '2015-08-24T18:52:59.345170Z',
                        'name': '9270-8106 Quebec Inc',
                        'nickname': null,
                        'reference': '927001',
                        'notes': null,
                        'disabled': false,
                        'parent': null,
                        'people': [],
                        'administrators': []
                    }
                ],
                'meta': {
                    'pagination': {
                        'page': 1,
                        'pages': 50,
                        'count': 493
                    }
                },
                'links': {
                    'first': 'http://192.168.166.2:8001/api/contacts/organizations?page=1&page_size=10&sort=name',
                    'last': 'http://192.168.166.2:8001/api/contacts/organizations?page=50&page_size=10&sort=name',
                    'next': 'http://192.168.166.2:8001/api/contacts/organizations?page=2&page_size=10&sort=name',
                    'prev': null
                }
            };

            vm.orgs = data.results;
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';

            if (vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }

        function deleteSelected(event) {
            var items = vm.selected;
            var promise = showDeleteDialogs(event, items);
            promise.finally(function () {
                getOrgs();
            });
        }

        function showDeleteDialogs(event, items, position) {
            if (!position) {
                position = 0;
            }
            return $mdDialog.show({
                clickOutsideToClose: true,
                controller: 'OrganizationsDeleteController',
                controllerAs: 'ctrl',
                targetEvent: event,
                locals: {
                    item: items[position]
                },
                bindToController: true,
                templateUrl: 'app/contents/contacts/organization-delete-dialog.tmpl.html'
            }).then(function () {
                position++;
                if (position < items.length) {
                    return showDeleteDialogs(event, items, position);
                }
            })
        }
    }
})();