function service() {
    let currentArticle = {};
    
    return {
        setArticle(article) {
            currentArticle = article;
        },
        getArticle() {
            return currentArticle;
        }
    };
}

angular
    .module('app.articleService', [])
    .service('articleService', service);