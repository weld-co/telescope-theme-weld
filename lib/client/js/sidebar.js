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
  }
});

Template[getTemplate('sidebar')].events({
  'click .dropdown-top-level': function (e) {
    e.preventDefault();
    $(e.currentTarget).next().slideToggle('fast');
  }
});