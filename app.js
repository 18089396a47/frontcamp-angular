import './index.html';
import './components/commonStyles';
import './components/article';
import './components/articleList';
import './components/newArticleForm';
import './components/pageButtons';
import './directives/customOnChange';
import './directives/customLengthCheck';
import './filters/pagination';

angular
    .module('app', [
        'app.article',
        'app.articleList',
        'app.newArticleForm',
        'app.pageButtons',
        'app.customOnChange',
        'app.customLengthCheck',
        'app.customPagination',
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
                template: '<new-article-form></new-article-form>'
            });
            
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .run(($state) => {
        $state.go('index');
    });

angular.bootstrap(document, ['app']);