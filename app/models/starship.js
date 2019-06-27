import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  crew: DS.attr('number'),
  url: DS.attr('string')
});
