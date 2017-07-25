import Ember from 'ember';

export default Ember.Component.extend({
    addNewBlog: false,

    actions: {
      blogFormShow() {
        this.set('addNewBlog', true)
      },

      blogFormHide() {
        this.set('addNewBlog', false)
      },

      saveBlog() {
        var params = {
          heading: this.get('heading'),
          sub_heading: this.get('sub_heading'),
          description: this.get('description'),
          image: this.get('image'),
          alt: this.get('alt')
        };
        this.set('addNewBlog', false);
        this.sendAction('saveBlog', params);
      }
  }
});

