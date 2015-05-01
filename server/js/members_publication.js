Meteor.publish('members', function () {
  return Meteor.users.find({isInvited: true}, {
      fields: {
        email_hash: true,
        isInvited: true,
        slug: true,
        username: true,
        'profile.name': true,
        'profile.bio': true,
        'profile.location': true, 
        'profile.skill1': true, 
        'profile.skill2': true, 
        'profile.skill3': true,
        'profile.membership': true,
        'status.online': true,
        'status.idle': true,
      }
    }
  );
});