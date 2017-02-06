import './articleListService';
import HOST from '../../constants/host';
import template from './articleList.html';

class controller {
    constructor(articleListService) {
        articleListService.getArticles().then((articles) => {this.articles = articles.data});
        this.page = 0;
    }
    
    currentPage(page) {
        if (page) {
            this.page = page;
        } else {
            return this.page;
        }
    }
}

const bindings = {};
const require = {};
const component = { bindings, template, controller, require };

angular
    .module('app.articleList', [
        'app.articleListService'
    ])
    .component('articleList', component)
;