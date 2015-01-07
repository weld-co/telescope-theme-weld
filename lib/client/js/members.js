Template[getTemplate('membersPage')].helpers({
  members: function () {
    return Meteor.users.find();
  }
});