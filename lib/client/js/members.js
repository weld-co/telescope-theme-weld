Router.configure({
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('members'); }
});

Meteor.startup(function () {
  Router.map(function() {
    this.route('members', {
      path: '/members',
      template: getTemplate('membersPage')
    });
  });
});