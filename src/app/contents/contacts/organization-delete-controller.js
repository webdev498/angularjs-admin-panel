/**
 * @ngdoc function
 * @name OrganizationsDeleteController
 * @module nossAppContacts
 * @kind function
 *
 * @description
 *
 * Controller for the delete dialog in Organizations page
 */
(function () {
    'use strict';

    angular
        .module('app.contents.contacts')
        .controller('OrganizationsDeleteController', Controller);

    /* @ngInject */
    function Controller($scope, $mdDialog) {
        this.cancel = function () {
            $mdDialog.cancel();
        };
        this.confirm = confirm;
        this.referenceIsValid = referenceIsValid;

        this.reference = "";


        function referenceIsValid(scope) {
            var reference = scope.reference;
            if (reference != undefined) {
                reference = scope.reference.toUpperCase();
            } else {
                return false;
            }
            var item_reference = scope.item.attributes.reference;
            return (reference == item_reference)
        }

        function confirm() {
            if ($scope.confirmationForm.$valid && referenceIsValid(this)) {
                var item = this.item.clone();
                item.remove();
                $mdDialog.hide();
            }
        }
    }
})();