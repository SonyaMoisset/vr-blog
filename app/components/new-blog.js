import Ember from 'ember';

export default Ember.Component.extend({
    addNewBlog: false,

    actions: {
      blogFormShow() {
        this.set('addNewBlog', true)
      },

      blogFormHide() {
        this.set('addNewBlog', false)
      }
  }
});
