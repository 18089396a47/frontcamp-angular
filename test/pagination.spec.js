import '../filters/pagination';

describe('Filter: ArticleList pagination', () => {
    let paginationFilter;
    
    beforeEach(() => {
        angular.mock.module('app.customPagination');
        inject(($injector) => {
            paginationFilter = $injector.get('$filter')('customPagination');
        });
    });
    
    it('filter should return specified array for defined input', () => {
        expect(paginationFilter([1, 2, 3], 1)).toEqual([2, 3]);
    });
    
    it('filter should return specified array for not defined input', () => {
        expect(paginationFilter(undefined, 1)).toBeUndefined();
    });
});