Template[getTemplate('membersPage')].helpers({
  avatarUrl: function(){
    return getAvatarUrl(this);
  },
  createdAtFormatted: function(){
    return this.createdAt ? moment(this.createdAt).fromNow() : '–';
  },
  displayName: function(){
    return getDisplayName(this);
  },
  getEmail: function(){
    return getEmail(this);
  },
  posts: function(){
    return Posts.find({'userId':this._id});
  },
  comments: function(){
    return Comments.find({'userId':this._id});
  },
  userIsAdmin: function(){
    return isAdmin(this);
  },
  getProfileUrl: function () {
    return getProfileUrl(this);
  },
  getKarma: function() {
    return Math.round(100*this.karma)/100;
  },
  getInvitedUserProfileUrl: function () {
    var user = Meteor.users.findOne(this.invitedId);
    return getProfileUrl(user);
  }
});
