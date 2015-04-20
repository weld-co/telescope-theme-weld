Template[getTemplate('instagram')].events({
  'click .confirm': function(e){
    e.preventDefault();
    clearSeenMessages();

    var $target=$(e.target);
    var user = this;
    var accessToken = window.location.hash.split("=")[1];
    var userID = accessToken.split(".")[0];
    var update = { 
      "profile.instagramAccessToken": accessToken,
      "profile.instagramUserID": parseInt(userID)
    };

    update = userEditClientCallbacks.reduce(function(result, currentFunction) {
      return currentFunction(user, result);
    }, update);

    Meteor.users.update(user._id, {
      $set: update
    }, function(error){
      if(error){
        flashMessage(error.reason, "error");
      } else {
        flashMessage(i18n.t('profile_updated'), 'success');
      }
      Deps.afterFlush(function() {
        var element = $('main.content-wrap');
        $('html, body').animate({scrollTop: element.offset().top});
      });
    });
    $('.confirm-message, .success-message').toggleClass('hidden');
  }
});