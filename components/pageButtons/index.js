import './pageButtons';
import template from './pageButtons.html';

class controller {
    prevPage() {
        if (this.page) {
            this.page -= 5;
        }
    }
    
    nextPage() {
        if (this.page + 5 < this.length) {
            this.page += 5;
        }
    }
}

const bindings = {
    page: '=',
    length: '<'
};
const require = {};
const component = { bindings, template, controller, require };

angular
    .module('app.pageButtons', [])
    .component('pageButtons', component)
;