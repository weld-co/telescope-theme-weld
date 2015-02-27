Meteor.startup(function () {
  Meteor.Device.isTablet();
  Meteor.Device.isPhone();
  Meteor.Device.isDesktop();
});