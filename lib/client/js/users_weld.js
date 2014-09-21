getAvatarUrlWeld = function(user){
  if(getSignupMethod(user)=='twitter'){
    return user.services.twitter.profile_image_url;
  }
  if(getSignupMethod(user)=='facebook') {
    return 'http://graph.facebook.com/'+user.services.facebook.id+'/picture';
  } 
  return Gravatar.getGravatar(user, {
    d: 'blank', //using CSS (in _avatars.scss) for default
    s: 100,
    secure: location.protocol == 'https:'
  });
};