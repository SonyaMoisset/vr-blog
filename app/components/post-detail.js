import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    }
  }
});
