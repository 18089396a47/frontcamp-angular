import HOST from '../../constants/host';
import template from './article.html';

class controller {
    constructor() {
        this.host = {
            name: HOST.NAME,
            getImage: HOST.GET_IMAGE
        }
    }
}

const bindings = {
    title: '@',
    image: '@',
    content: '@',
    author: '@',
    date: '<'
};
const require = {};
const component = { bindings, template, controller, require };

angular
    .module('app.article', [])
    .component('article', component)
;