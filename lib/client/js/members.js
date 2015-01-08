Meteor.startup(function () {
  Router.route('/members', {
    name: 'members',
    loadingTemplate: 'loadingWeld',
    template: getTemplate('membersPage'),
    waitOn: function() {
      return Meteor.subscribe('members'); 
    },
    fastRender: true
  });
});