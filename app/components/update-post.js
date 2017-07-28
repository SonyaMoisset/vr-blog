import Ember from 'ember';

export default Ember.Component.extend({
  editPost: false,

  actions: {
    editPostShow() {
      this.set('editPost', true)
    },

    editPostHide() {
      this.set('editPost', false)
    },

    updatePost(post) {
      var params = {
        heading: this.get('heading'),
        sub_heading: this.get('sub_heading'),
        description: this.get('description'),
        image: this.get('image'),
        alt: this.get('alt')
      };
      this.set('editPost', false);
      this.sendAction('updatePost', post, params);
    }

  }
});
