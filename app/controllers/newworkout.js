import Ember from 'ember';

export default Ember.Controller.extend({
    model: {}, 
    actions: {
        addWorkout: function() {
            console.log("made it here!\n");
            console.log(this.get('name'));
            console.log(this.get('date'));
            console.log(this.get('descr'));
            var wo = this.store.createRecord('workout', {
                name: this.get('name'),
                date: this.get('date'),
                descr: this.get('descr'),
            }); 
            wo.save();
        },  
    }  
});
