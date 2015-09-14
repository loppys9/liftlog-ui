import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    etype: DS.attr('string'),  
    descr: DS.attr('string'),  
});
