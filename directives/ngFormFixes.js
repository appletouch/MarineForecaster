/**
 * Created by PKoolwijk on 11-7-2016.
 */
var module = angular.module('ngFormFixes', []);

module.directive('ngForm', function ($parse, $timeout) {
    return {
        link: linkFunction
    };

    function linkFunction ($scope, $element, $attrs) {

        var $submit_button = findSubmitButton();

        // bind Enter key
        $element.bind('keydown', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                if ($attrs.ngSubmit) {
                    $parse($attrs.ngSubmit)($scope);
                    e.stopPropagation();
                } else if ($submit_button) {
                    $submit_button.click();
                    e.stopPropagation();
                }
            }
        });

        // bind Submit click to run itself or ngSubmit
        angular.element($submit_button).bind('click', function (e) {
            if ($attrs.ngSubmit && angular.element(this).attr('ng-click') === undefined) {
                $parse($attrs.ngSubmit)($scope);
                e.stopPropagation();

                $timeout(function () {
                    if ($scope[$attrs.ngForm || $attrs.name]) {
                        $scope[$attrs.ngForm || $attrs.name].$submitted = true;
                    }
                    $element.addClass('ng-submitted');
                });
            }
        });

        // internal
        function findSubmitButton () {
            var $buttons = [$element.find('button'), $element.find('input')];

            for (var i = 0; i < $buttons.length; i++) {
                for (var n = 0; n < $buttons[i].length; n++) {
                    var $current = $buttons[i][n];
                    if ($current.getAttribute('type') && $current.getAttribute('type').toLowerCase() === 'submit') {
                        return $current;
                    }

                }
            }
        }
    }

});

module.directive('onEnter', ['$parse', function ($parse) {
    return {
        link: function ($scope, $element, $attrs) {

            $element.bind('keyup', function (e) {

                var keyCode = e.keyCode || e.which;

                if (keyCode === 13 && $attrs.onEnter) {
                    $parse($attrs.onEnter)($scope);
                }

            });
        }
    };
}]);