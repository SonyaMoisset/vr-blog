import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  alt: DS.attr(),
  heading: DS.attr(),
  description: DS.attr()
});
