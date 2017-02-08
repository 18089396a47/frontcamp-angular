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
        },
        update(body, id) {
            return $http({
                method: 'POST',
                url: `${HOST.NAME}${HOST.EDIT_ARTICLE}${id}`,
                data: body,
                headers: {'Content-Type': undefined}
            });
        }
    };
}

angular
    .module('app.editArticleFormService', [])
    .service('editArticleFormService', service);