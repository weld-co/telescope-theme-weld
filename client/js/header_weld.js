Template[getTemplate('headerWeld')].helpers({
  logo: function () {
    return getTemplate('logo');
  }
});

Template[getTemplate('headerWeld')].events({
  'click .logo-wrap': function (e) {
    $('body').removeClass('mobile-nav-open no-scroll');
    $('html,body').scrollTop();
  }
});