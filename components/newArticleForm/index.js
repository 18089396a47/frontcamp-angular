import './newArticleForm.styl';
import './newArticleFormService';
import template from './newArticleForm.html';

class controller {
    constructor($http, $scope, $element, $state, newArticleFormService) {
        this.newArticleFormService = newArticleFormService;
        this.$scope = $scope;
        this.$state = $state;
        
        this.form = $element.find('form')[0];
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.imagePreview = URL.createObjectURL(event.target.files[0]);
        this.$scope.$digest();
    }
    
    handleSubmit(event) {
        const body = new FormData(this.form);
        this.newArticleFormService.submit(body).then((res) => {
            if (res.status === 200) {
                this.$state.go('index');
            }
        });
    }
}


const bindings = {};
const require = {};
const component = { bindings, template, controller, require };

angular
    .module('app.newArticleForm', [
        'app.newArticleFormService'
    ])
    .component('newArticleForm', component)
;