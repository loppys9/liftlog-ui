import DS from 'ember-data';

export default DS.Model.extend({
    workout: DS.belongsTo('workout'), 
    excercise: DS.belongsTo('excercise'),
    weight: DS.attr('number'),
    units: DS.attr('string'),
    sets: DS.attr('number'),
    reps: DS.attr('number'),
    note: DS.attr('number'),
});
