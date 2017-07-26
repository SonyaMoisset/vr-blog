import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      pillars: this.store.findAll('pillar'),
      posts: this.store.findAll('post')
    });
  },

  setupController(controller, models) {
    controller.set('pillars', models.pillars);
    controller.set('posts', models.posts);
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
