import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    },

    deletePost(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
