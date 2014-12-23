Template[getTemplate('userAccountWeld')].events({
  'submit #account-form': function(e){
    e.preventDefault();

    clearSeenMessages();
    if(!Meteor.user())
      flashMessage(i18n.t('you_must_be_logged_in'), 'error');

    var $target=$(e.target);
    var user = this;
    var update = {
      "profile.instagram": $target.find('[name=instagram]').val(),
      "profile.phone": $target.find('[name=phone]').val()
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
        var element = $('.grid > .error');
        $('html, body').animate({scrollTop: element.offset().top});
      });
    });
  }
});