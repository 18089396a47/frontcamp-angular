import HOST from '../../constants/host';

function service($http) {
    return {
        getArticles() {
            return $http.get(HOST.NAME);
        }
    };
}

angular
    .module('app.articleListService', [])
    .service('articleListService', service);