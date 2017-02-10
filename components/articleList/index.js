import './articleListService';
import HOST from '../../constants/host';
import template from './articleList.html';

class artcleList {
    constructor(articleListService) {
        this.articles = [];
        this.page = 0;
        
        articleListService.getArticles().then((articles) => {this.articles = articles.data});
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
const component = { bindings, template, controller: artcleList, require };

angular
    .module('app.articleList', [
        'app.articleListService'
    ])
    .component('articleList', component)
;