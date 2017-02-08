import './index.html';
import './components/commonStyles';
import './components/article';
import './components/articleList';
import './components/editArticleForm';
import './components/pageButtons';
import './directives/customOnChange';
import './directives/customLengthCheck';
import './filters/pagination';
import './commonServices/articleService';

angular
    .module('app', [
        'app.article',
        'app.articleList',
        'app.editArticleForm',
        'app.pageButtons',
        'app.customOnChange',
        'app.customLengthCheck',
        'app.customPagination',
        'app.articleService',
        'ui.router',
    ])
    .config(($stateProvider, $httpProvider) => {
        $stateProvider
            .state({
                name: 'index',
                url: '/',
                template: '<article-list></article-list>'
            })
            .state({
                name: 'add',
                url: '/add',
                template: '<edit-article-form></edit-article-form>'
            })
            .state({
                name: 'edit',
                url: 'edit/:id',
                template: '<edit-article-form></edit-article-form>'
            });
            
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .run(($state) => {
        $state.go('index');
    });

angular.bootstrap(document, ['app']);