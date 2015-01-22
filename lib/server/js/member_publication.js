Meteor.publish('members', function () {
  return Meteor.users.find(
    {isInvited: true}, 
    {fields: {
      email_hash: true, 
      slug: true, 
      'profile.bio': true, 
      'profile.name': true, 
      'profile.skills': true, 
      'profile.location': true
    }}
  );
});