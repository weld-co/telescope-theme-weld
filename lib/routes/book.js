Router.route('/book', {
  name: 'book',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('calendar'),
  data: function() {
    return Meteor.user();
  },
});