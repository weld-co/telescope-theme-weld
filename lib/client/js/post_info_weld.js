Template[getTemplate('postInfoWeld')].helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  },
  oneBasedRank: function(){
    if(typeof this.rank !== 'undefined')
      return this.rank + 1;
  }
});
