angular
    .module('app.customOnChange', [])
    .directive('customOnChange', () => {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                const onChangeHandler = scope.$eval(attrs.customOnChange);
                element.bind('change', onChangeHandler);
            }
        };
    });
