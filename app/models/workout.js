import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr('string'), /* Fix!!! */
    name: DS.attr('string'),
    descr: DS.attr('string'),
});
