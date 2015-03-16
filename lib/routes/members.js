Router.route('/members', {
  name: 'members',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('membersPage'),
  waitOn: function() {
    return Meteor.subscribe('members'); 
  },
  data: function() {
    return { users: Meteor.users.find() }
  },
  fastRender: true
});