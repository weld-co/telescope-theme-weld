Meteor.publish('members', function () {
  return Meteor.users.find(
    {isInvited: true}, 
    {fields: memberOptions, multi: true}
  );
});