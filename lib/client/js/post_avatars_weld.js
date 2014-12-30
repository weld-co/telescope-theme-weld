Template[getTemplate('postAvatarsWeld')].helpers({
  upvoters: function () {
   return _.first(_.without(this.upvoters, this.userId), 4);
  }
});