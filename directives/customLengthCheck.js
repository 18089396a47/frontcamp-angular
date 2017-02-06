angular
    .module('app.customLengthCheck', [])
    .directive('customLengthCheck', () => {
        function isValid (value, minLength) {
            const valid = (value || '').length >= minLength;
            console.log(`length is ${valid ? '' : 'in'}valid`);
            return valid;
        }
        
        return {
            require: 'ngModel',
            link(scope, elem, attr, ngModel) {
                var length = attr.customLengthCheck;
                
                ngModel.$parsers.unshift((value) => {
                    ngModel.$setValidity('customLengthCheck', isValid(value, length));
                    return value;
                });

                ngModel.$formatters.unshift(function(value) {
                    ngModel.$setValidity('customLengthCheck', isValid(value, length));
                    return value;
                });
            }
        };
    });