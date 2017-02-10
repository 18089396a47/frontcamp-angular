import HOST from '../../constants/host';
import template from './article.html';

class Article {
    constructor(articleService) {
        this.articleService = articleService;
        
        this.host = {
            name: HOST.NAME,
            getImage: HOST.IMAGE_PATH
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
const component = { bindings, template, controller: Article, require };

angular
    .module('app.article', [])
    .component('article', component)
;