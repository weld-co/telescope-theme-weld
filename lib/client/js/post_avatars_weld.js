Template[getTemplate('postAvatarsWeld')].helpers({
  upvoters: function () {
   return _.without(this.upvoters, this.userId);
  }
});