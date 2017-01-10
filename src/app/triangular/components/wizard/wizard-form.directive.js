(function() {
    'use strict';

    angular
        .module('triangular.components')
        .directive('triWizardForm', WizardFormProgress);

    /* @ngInject */
    function WizardFormProgress() {
        // Usage:
        //  <div tri-wizard>
        //      <form tri-wizard-form>
        //      </form>
        //  </div>
        //
        var directive = {
            require: ['form', '^triWizard'],
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, require) {
            var ngFormCtrl = require[0];
            var triWizardCtrl = require[1];

            // register this form with the parent triWizard directive
            triWizardCtrl.registerForm(ngFormCtrl);

            // watch for form input changes and update the wizard progress
            element.on('input', function() {
                triWizardCtrl.updateProgress();
            });
        }
    }
})();