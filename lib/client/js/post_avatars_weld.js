Template[getTemplate('postAvatarsWeld')].helpers({
  upvoters: function () {
    users = Meteor.users.find({_id: {$in: this.upvoters}});
    return _.without(this.upvoters, this.userId); // return Meteor.users.find({_id: {$in: this.upvoters}});
  }
});