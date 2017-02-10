angular
    .module('app.customOnChange', [])
    .directive('customOnChange', () => {
        return {
            restrict: 'A',
            scope: {
                onChangeHandler: '&customOnChange'
            },
            link: function (scope, element, attrs) {
                element.bind('change', (event) => {
                    scope.onChangeHandler({ event });
                });
            }
        };
    });
