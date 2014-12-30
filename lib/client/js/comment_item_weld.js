Template[getTemplate('comment_item_weld')].helpers({
  likesUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('Like') : i18n.t('Likes');
  }
});

Template[getTemplate('comment_item_weld')].events({
  'click .upvote-link': function(e, instance){
    if(!Meteor.user()){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('upvoteComment', this, function(error, result){
      trackEvent("post upvoted", {'commentId':instance.data._id, 'postId': instance.data.post, 'authorId':instance.data.userId});
    });
  }
});