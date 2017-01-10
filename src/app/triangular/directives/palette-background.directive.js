(function() {
    'use strict';

    angular
        .module('triangular.directives')
        .directive('paletteBackground', paletteBackground);

    /* @ngInject */
    function paletteBackground(triTheming) {
        // Usage:
        // ```html
        // <div palette-background="green:500">Coloured content</div>
        // ```
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs) {
            var splitColor = attrs.paletteBackground.split(':');
            var color = triTheming.getPaletteColor(splitColor[0], splitColor[1]);

            if(angular.isDefined(color)) {
                $element.css({
                    'background-color': triTheming.rgba(color.value),
                    'border-color': triTheming.rgba(color.value),
                    'color': triTheming.rgba(color.contrast)
                });
            }
        }
    }
})();