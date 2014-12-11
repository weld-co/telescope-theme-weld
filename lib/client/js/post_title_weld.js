Template[getTemplate('postTitleWeld')].helpers({
  stripHTML: function(s) {
    return s.replace(/<(?:.|\n)*?>/gm, '');
  }
});