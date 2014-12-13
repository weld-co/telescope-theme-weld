Meteor.startup(function () {
  Avatar.options = {
    emailHashProperty: 'email_hash',
    defaultAvatarUrl: 'blank'
  };
});