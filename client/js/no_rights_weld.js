Template[getTemplate('no_rights_weld')].helpers({
  siteName: function () {
    return getSetting('title');
  },
  tagline: function () {
    return getSetting('tagline');
  }
});