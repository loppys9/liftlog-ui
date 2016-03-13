import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.TextField.extend({
    highlight: false,
    hint: true,
    minLength: 2,
    href: ENV.APP.API_HOST,
    model: null,
    endpoint: '',

    didInsertElement: function(){
        this._super();
        this.initTypeahead();
    },
    initTypeahead: function(){
        var _this = this;
        var data = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: 'api/excercisesearch',
                prepare: function (query, settings) {
                    settings.data = {"q" : query};
                    return settings;
                },
            }
        });

        data.initialize();
        this.typeahead = this.$().typeahead(
            {
                minLength: _this.minLength,
            },
            {
                name: 'excercise',
                display: function (obj){
                    console.log(obj['name']);
                    _this.set("endpoint", _this.href + "api/excercise/" + obj['id'] + '/');
                    console.log(_this.value);
                    return obj['name'];
                },
                source: data.ttAdapter(),
            });
    },
});
