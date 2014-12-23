Template[getTemplate('postAvatarsWeld')].helpers({
  upvoters: function () {
    // changed to show Upvoters instead of commenters and took off number limit
    // remove post author ID from commenters to avoid showing author's avatar again
    // limit to 4 commenters in case there's more
    // TODO: show a "..." sign or something
    return _.first(_.without(this.upvoters, this.userId), 10);
  }
});