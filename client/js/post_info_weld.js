Template[getTemplate('postInfoWeld')].helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false; 
    return _.include(this.upvoters, user._id);
  },
  commented: function(){
    var user = Meteor.user();
    if(!user) return false; 
    return _.include(this.commenters, user._id);
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
  'click .upvote-link.not-upvoted': function(e, instance){
    var post = this;
    e.preventDefault();
    e.stopPropagation();
    if(!Meteor.user()){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('upvotePost', post, function(error, result){
      trackEvent("post upvoted", {'_id': post._id});
    });
  },
  'click .upvote-link.upvoted': function(e, instance){
    var post = this;
    e.preventDefault();
    e.stopPropagation();
    if(!Meteor.user()){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('cancelUpvotePost', post, function(error, result){
      trackEvent("post upvoted cancelled", {'_id': post._id});
    });
  },
});