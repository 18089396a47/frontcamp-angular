import '../directives/customOnChange';

describe('Directive: OnChange directive', () => {
    let compile, scope, onChange;
    
    beforeEach(() => {
        angular.mock.module('app.customOnChange');
        inject(($compile, $rootScope) => {
            compile = $compile;
            scope = $rootScope.$new();
            scope.onChangeHandler = jasmine.createSpy();
            
            const element = angular.element('<input type="file" ng-model="file" custom-on-change="onChangeHandler(event)">');
            const compiledElement = compile(element)(scope);
            scope.$digest();
            onChange = compiledElement;
        });
    });
    
    it('directive should call onChangeHandler', () => {
        onChange.triggerHandler('change');
        scope.$digest();
        expect(scope.onChangeHandler).toHaveBeenCalled();
    });
});