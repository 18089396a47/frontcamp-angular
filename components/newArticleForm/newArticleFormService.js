import HOST from '../../constants/host';

function service($http) {
    return {
        submit(body) {
            return $http({
                method: 'POST',
                url: `${HOST.NAME}${HOST.ADD_ARTICLE}`,
                data: body,
                headers: {'Content-Type': undefined}
            });
        }
    };
}

angular
    .module('app.newArticleFormService', [])
    .service('newArticleFormService', service);