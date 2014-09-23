Template[getTemplate('user_profile')].helpers({
  userEmail : function(){
    return getEmail(this);
  }
});

Template[getTemplate('user_profile')].rendered = function(){
  $('html,body').scrollTop(0);
};
