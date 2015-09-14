import Ember from 'ember';

export default Ember.Route.extend({
    //model: function(){
    setupController: function(controller, model){
        var token = $('meta[name="csrf-token"]').attr('content');
        controller.set('csrf_token', token);
    },
});
