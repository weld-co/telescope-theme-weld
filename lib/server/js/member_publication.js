Meteor.publish("members", function () {
  return Meteor.users.find({isInvited: true});
});