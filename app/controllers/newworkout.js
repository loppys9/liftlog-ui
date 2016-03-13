import Ember from 'ember';

export default Ember.Controller.extend({
    model: {}, 
    //le: this.store.createRecord('liftentry'),
    /*liftEntry: function() {
        console.log("add lift entry");
    },*/
    workout: null,
    actions: {
        addWorkout: function() {
            /*console.log(this.get('name'));
            console.log(this.get('date'));
            console.log(this.get('descr'));*/
            //var wo = this.store.createRecord('workout', {
            this.workout = this.store.createRecord('workout', {
                name: this.get('name'),
                date: this.get('date'),
                descr: this.get('descr'),
            }); 
            //wo.save();
            this.workout.save();
        },  
        addEntry: function(liftEntry) {
            liftEntry.set('workout', this.workout);
            console.log("good?");
            console.log(liftEntry);
            liftEntry.save();
        },
    }  
});
