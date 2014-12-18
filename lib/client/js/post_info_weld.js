Template[getTemplate('postInfoWeld')].helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false; 
    return _.include(this.upvoters, user._id);
  },
  likesUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('Like') : i18n.t('Likes');
  },
  oneBasedRank: function(){
    if(typeof this.rank !== 'undefined')
      return this.rank + 1;
  },
  authorName: function(){
    return getAuthorName(this);
  },
  profileUrl: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getProfileUrl(user);
  }
});

Template[getTemplate('postInfoWeld')].events({
  'click .upvote-link': function(e, instance){
    var post = this;
    e.preventDefault();
    e.stopPropagation();
    if(!Meteor.user()){
      Router.go(getSigninUrl());
      throwError(i18n.t("Please log in first"));
    }
    Meteor.call('upvotePost', post, function(error, result){
      trackEvent("post upvoted", {'_id': post._id});
    });
  }
});
