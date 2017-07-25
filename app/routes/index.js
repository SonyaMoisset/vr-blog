import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      pillars: this.store.findAll('pillar'),
      blogs: this.store.findAll('blog')
    });
  },

  setupController(controller, models) {
    controller.set('pillars', models.pillars);
    controller.set('blogs', models.blogs);
  },

  actions: {
    saveBlog(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('index');
    }
  }
});
