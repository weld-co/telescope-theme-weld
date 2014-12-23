Template[getTemplate('userInfoWeld')].helpers({
  userEmail : function(){
    return getEmail(this);
  },
  // adding http if not already there
  profileSiteOut: function () {
    var url = this.profile.site;
    if(!!url)
      return (url.substring(0, 7) == "http://" || url.substring(0, 8) == "https://") ? url : "http://"+url;
  }
});