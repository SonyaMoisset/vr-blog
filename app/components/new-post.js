import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,

  actions: {
    postFormShow() {
      this.set('addNewPost', true)
    },

    postFormHide() {
      this.set('addNewPost', false)
    },

    savePost() {
      var params = {
        heading: this.get('heading'),
        sub_heading: this.get('sub_heading'),
        description: this.get('description'),
        image: this.get('image'),
        alt: this.get('alt')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});

