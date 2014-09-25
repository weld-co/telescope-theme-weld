Meteor.startup(function () {
  Router.map(function() {
    this.route('members', {
      template: getTemplate('membersPage'),
      path: '/members'
    });
  });
});