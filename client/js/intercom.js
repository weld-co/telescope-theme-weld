Meteor.startup(function () {
  IntercomSettings.userInfo = function(user, info) {
    if (Meteor.user() && !Meteor.loggingIn()) {
      var intercomSettings = {
        name: Meteor.user().username,
        email: Meteor.user().emails[0].address,
      };
    }
  }
});