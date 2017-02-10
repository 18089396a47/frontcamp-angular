angular
    .module('app.customPagination', [])
    .filter('customPagination', () => {
        return (list, start) => (list && list.slice(start));
    });