Meteor.startup(function () {
  Router.map(function() {
    this.route('landing', {
      path: '/',
      template: getTemplate('landingWeld')
    });
  });
});