import '../components/editArticleForm/editArticleFormService';

describe('Serice: EditArticleFormService', () => {
    const BODY = {
        author: 'name',
        content: 'test',
        title: 'title',
        image: 'url'
    }, ID = 123;
    let editArticleFormService, $http, $httpBackend;
    
    beforeEach(() => {
        angular.mock.module('app.editArticleFormService');
        inject(($injector, _editArticleFormService_) => {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            editArticleFormService = _editArticleFormService_;
        });
    });
    
    it('service should send post request with specified body', (done) => {
        $httpBackend
            .expect('POST', 'http://localhost:3000/articles/add', BODY)
            .respond(200);
        editArticleFormService.submit(BODY).then((res) => done(res));
        $httpBackend.flush();
    });
    
    it('service should send put request with specified body and id', (done) => {
        $httpBackend
            .expect('PUT', `http://localhost:3000/articles/edit/${ID}`, BODY)
            .respond(200);
        editArticleFormService.update(BODY, ID).then((res) => done(res));
        $httpBackend.flush();
    });
});