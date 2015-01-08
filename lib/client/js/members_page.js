Template[getTemplate('membersPage')].helpers({
  members: function () {
    return Meteor.users.find();
  }
});

Template.memberItem.rendered = function (){
  $("p.truncate").dotdotdot({
    watch: "window"
  });
};