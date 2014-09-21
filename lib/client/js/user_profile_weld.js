Template[getTemplate('user_profile')].helpers({
  userEmail : function(){
    return getEmail(this);
  }
});