Meteor.startup(function () {
  //Intercom sending data
  IntercomSettings.userInfo = function(user, info) {
  // add properties to the info object, for instance:
    if (user.intercomHash) {
      info.email = user.profile.email;
      info.name = user.profile.name;
    }
  };
});