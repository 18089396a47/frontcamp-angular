angular
    .module('app.customPagination', [])
    .filter('customPagination', () => {
        return (list, start) => (list.slice(start));
    });