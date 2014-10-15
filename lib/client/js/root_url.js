Meteor.startup(function () {
  Meteor.absoluteUrl({
    rootUrl: "http://welderwire.co"
  });

  Avatar = {
  
  // If defined (e.g. from a startup config file in your app), these options
  // override default functionality
  options: {
    
    // This will replace the standard default avatar URL. It can be a relative
    // path (e.g. '/images/defaultAvatar.png')
    defaultAvatarUrl: '/packages/telescope-theme-weld/img/weld_avatar.png'
  },
});