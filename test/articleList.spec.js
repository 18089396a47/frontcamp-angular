import '../components/articleList';
import '../filters/pagination';

describe('Component: ArticleList component', () => {
    const ARTICLES = [{
        author: 'name',
        content: 'test',
        title: 'title',
        image: 'url',
        date: new Date(2000, 0, 0, 0, 0)
    }], MOCKED_ARTICLE_LIST_SERVICE = {
        getArticles() {
            return {
                then(func) {
                    func({
                        data: ARTICLES
                    });
                }
            }
        }
    };
    let componentController, scope, articleList;
    
    beforeEach(() => {
        angular.mock.module('app.customPagination');
        angular.mock.module('app.articleList', ($provide) => {
            $provide.value('articleListService', MOCKED_ARTICLE_LIST_SERVICE);
        });
        inject(($componentController, $rootScope, $templateCache, $httpBackend) => {
            componentController = $componentController;
            scope = $rootScope.$new();
            
            const compiledElement = componentController('articleList');
            scope.$digest();
            articleList = compiledElement;
        });
    });
    
    it('component should get articles during initialization', () => {
        expect(articleList.articles).toEqual(ARTICLES);
    });
    
    it('component should return and change the currentPage', () => {
        expect(articleList.currentPage()).toEqual(0);
        articleList.currentPage(2);
        expect(articleList.currentPage()).toEqual(2);
    });
});