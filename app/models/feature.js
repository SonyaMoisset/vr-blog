import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr(),
  sub_heading: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  alt: DS.attr()
});
