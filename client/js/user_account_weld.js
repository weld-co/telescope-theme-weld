Template[getTemplate('userAccountWeld')].events({
  // Prevent Enter from submiting Skills input so it can be hyphenated
  'keypress .hyphenated': function(e){
    if ( e.which == 13 ) return false;
  },

  // Convert all values to lowercase and hyphenated
  // this is important for the MixItUp method of filtering
  'blur .hyphenated': function(e){
    var hyphenated = $(e.currentTarget).val();
    // replace special characters and numbers with hyphens, remove trailing hphens
    hyphenated = hyphenated.replace(/[^A-Za-z]+/g, '-').replace(/^(-)+|(-)+$/g,'').toLowerCase();
    $(e.currentTarget).val(hyphenated);
  },

  'submit #account-form': function(e){
    e.preventDefault();

    clearSeenMessages();
    if(!Meteor.user())
      flashMessage(i18n.t('you_must_be_logged_in'), 'error');

    var $target=$(e.target);
    var user = this;
    var update = {
      "profile.instagram": $target.find('[name=instagram]').val(),
      "profile.phone": $target.find('[name=phone]').val(),
      "profile.location": $target.find('[name=location]').val(),
      "profile.skill1": $target.find('[name=skill1]').val(),
      "profile.skill2": $target.find('[name=skill2]').val(),
      "profile.skill3": $target.find('[name=skill3]').val(),
      "profile.birthday": $target.find('[name=birthday]').val(),
      "profile.membership": $target.find('[name=membership]:checked').val(),
    };

    update = userEditClientCallbacks.reduce(function(result, currentFunction) {
      return currentFunction(user, result);
    }, update);

    Meteor.users.update(user._id, {
      $set: update
    });
  }
});