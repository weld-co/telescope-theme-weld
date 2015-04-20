Meteor.publish('instafeedData', function () {
  return Meteor.users.find({
    fields: {
      'profile.instagramAccessToken': true, 
      'profile.instagramUserID': true,
    }
  });
});