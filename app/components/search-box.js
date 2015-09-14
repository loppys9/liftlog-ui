import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.TextField.extend({
    highlight: false,
    hint: true,
    minLength: 2,
    href: ENV.APP.API_HOST,
    model: null,
    //endpoint: '',
    value: '',

    didInsertElement: function(){
        this._super();
        this.initTypeahead();
    },
    initTypeahead: function(){
        var _this = this;
        //console.log(this.model);
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
                //display: 'name',
                display: function (obj){
                    console.log(obj['name']);
                    //_this.endpoint = _this.href + "api/excercise/" + obj['id'] + '/';
                    _this.value = _this.href + "api/excercise/" + obj['id'] + '/';
                    console.log(_this.value);
                    return obj['name'];
                },
                source: data.ttAdapter(),
                /*source: function(query, cb){
                    console.log(query);
                    data.get(query, function(suggestions) {
                        cb(suggestions);
                    });
                },*/
            });
    },
});
