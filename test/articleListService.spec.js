import '../components/articleList/articleListService';

describe('Serice: articleListService', () => {
    const ARTICLES = [{
        author: 'name',
        content: 'test',
        title: 'title',
        image: 'url',
        date: new Date(2000, 0, 0, 0, 0)
    }];
    let articleListService, $http, $httpBackend;
    
    beforeEach(() => {
        angular.mock.module('app.articleListService');
        inject(($injector, _articleListService_) => {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            articleListService = _articleListService_;
        });
    });
    
    it('service should send post request with specified body', (done) => {
        $httpBackend
            .expect('GET', 'http://localhost:3000')
            .respond(200, ARTICLES);
        articleListService.getArticles().then((res) => {
            expect(res.data).toEqual(ARTICLES);
            done(res);
        });
        $httpBackend.flush();
    });
});