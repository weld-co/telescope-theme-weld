Meteor.startup(function () {
  window.addEventListener('load', function() {
      new FastClick(document.body);
  }, false);
});