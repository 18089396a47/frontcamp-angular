import HOST from '../../constants/host';
import template from './article.html';

class controller {
    constructor(articleService) {
        this.articleService = articleService;
        
        this.host = {
            name: HOST.NAME,
            getImage: HOST.GET_IMAGE
        };
    }
    
    setArticle() {
        this.articleService.setArticle(this.article);
    }
}

const bindings = {
    article: '<'
};
const require = {};
const component = { bindings, template, controller, require };

angular
    .module('app.article', [])
    .component('article', component)
;