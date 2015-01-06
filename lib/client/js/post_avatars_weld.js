Template[getTemplate('postAvatarsWeld')].helpers({
  upvoters: function () {
    return _.without(this.upvoters, this.userId); // return Meteor.users.find({_id: {$in: this.upvoters}});
  }
});