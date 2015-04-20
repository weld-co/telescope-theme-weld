Template[getTemplate('userInfoWeld')].helpers({
  // adding http if not already there
  profileSiteOut: function () {
    var url = this.profile.site;
    if(!!url)
      return (url.substring(0, 7) == "http://" || url.substring(0, 8) == "https://") ? url : "http://"+url;
  },
  hasDisplayName: function () {
  if(this.username != this.profile.name)
    return true
  }
});

// debug data contexts
Template.instagramUserFeed.helpers({
  log: function () {
    console.log(this.profile.instagramUserID);
    console.log(this.profile.instagramAccessToken);
  }  
});

// TODO: Not working. Get the instagram credentials from user profile.property and pass them into the instafeed function
Template.instagramUserFeed.rendered = function (){
  var currentUserID = this.profile.instagramUserID;
  var currentAccessToken = this.profile.instagramAccessToken;
  var userFeed = new Instafeed({
      get: 'user',
      userId: currentUserID,
      accessToken: currentAccessToken,
      resolution: 'standard_resolution',
      limit: 15
  });
  userFeed.run();
};

// // Static user data for design purposes
// Template.instagramUserFeed.rendered = function (){
//   var userFeed = new Instafeed({
//       get: 'tagged',
//       tagName: 'wecreateweld',
//       clientId: '9326b610179f48a28f874b065201cfff',
//       resolution: 'standard_resolution',
//       limit: 15
//   });
//   userFeed.run();
// };

Template[getTemplate('userInfoWeld')].events({
  'click [data-js="instagramAuth"]': function(e) {
    e.preventDefault();
    var loginUrl = $('[data-js="instagramAuth"]').attr('href');
    window.open(loginUrl, name, 'width=500, height=400');
    return false;
  }
});