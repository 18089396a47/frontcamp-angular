import './editArticleForm.styl';
import './editArticleFormService';
import template from './editArticleForm.html';

class EditArticleForm {
    constructor($scope, $element, $state, $stateParams, editArticleFormService, articleService) {
        this.editArticleFormService = editArticleFormService;
        this.$scope = $scope;
        this.$state = $state;
        this.isEdit = $stateParams.id !== undefined;
        if (this.isEdit) {
            this.article = articleService.getArticle();
        }
        
        this.form = $element.find('form')[0];
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.imagePreview = URL.createObjectURL(event.target.files[0]);
        this.$scope.$digest();
    }
    
    handleSubmit(event) {
        const body = new FormData(this.form);
        if (this.isEdit) {
            this.editArticleFormService.update(body, this.article._id).then((res) => {
                if (res.status === 200) {
                    this.$state.go('index');
                }
            });
        } else {
            this.editArticleFormService.submit(body).then((res) => {
                if (res.status === 200) {
                    this.$state.go('index');
                }
            });
        }
    }
}


const bindings = {};
const require = {};
const component = { bindings, template, controller: EditArticleForm, require };

angular
    .module('app.editArticleForm', [
        'app.editArticleFormService'
    ])
    .component('editArticleForm', component)
;