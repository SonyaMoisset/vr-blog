import Ember from 'ember';

export default Ember.Component.extend({
    addNewBlog: false,

    actions: {
      blogFormShow() {
        this.set('addNewBlog', true)
      }
  }
});
