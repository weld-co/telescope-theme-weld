Template[getTemplate('sidebar')].helpers({
  primaryNav: function () {
    return primaryNav;
  },
  hasPrimaryNav: function () {
    return !!primaryNav.length;
  },
  secondaryNav: function () {
    return secondaryNav;
  },
  hasSecondaryNav: function () {
    return !!secondaryNav.length;
  },
  dropdownClass: function () {
    return getThemeSetting('useDropdowns', true) ? 'has-dropdown' : 'no-dropdown';
  },
  getTemplate: function () {
    return getTemplate(this);
  },
  isLoggedIn: function () {
  return !!Meteor.user();
  },
  profileUrl: function () {
    return getProfileUrl(Meteor.user());
  },
  hasNotifications: function () {
    return !!Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).count();    
  },
  canPost: function(){
    return canPost(Meteor.user());
  },
  requirePostsApproval: function(){
    return getSetting('requirePostsApproval');
  },
  userMenu: function () {
    return getTemplate('userMenu');
  }
});

Template[getTemplate('sidebar')].events({
  'click .close-icon': function () {
    $('body').toggleClass('mobile-nav-open');
  }
});


Template[getTemplate('sidebar')].events({
  'click .dropdown-top-level': function (e) {
    e.preventDefault();
    $(e.currentTarget).next().slideToggle('fast');
  },
  'click .sidebar a': function (e) {
    if (e.target.className.indexOf('dropdown-top-level') == -1){
      $('body').removeClass('mobile-nav-open');
    }
  }
});