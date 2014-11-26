Meteor.startup(function () {
  Accounts.emailTemplates.siteName = "welderwire.co";
  Accounts.emailTemplates.from = "WELDER WIRE <support@welderwire.co>";
  Accounts.emailTemplates.enrollAccount.subject = function (user) {
      return "Welcome to the WELDER WIRE, " + user.profile.name;
  };
  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    var url = url.replace('welderwire.co//', 'welderwire.co/');
    return "Click this link to reset your password: " + url;
  };
});