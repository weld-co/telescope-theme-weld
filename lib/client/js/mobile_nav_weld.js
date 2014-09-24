Template[getTemplate('mobile_nav_weld')].helpers({
  isLoggedIn: function () {
  return !!Meteor.user();
  },
  profileUrl: function () {
    return getProfileUrl(Meteor.user());
  },
  hasNotifications: function () {
  return !!Notifications.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).count();    
  },
});