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