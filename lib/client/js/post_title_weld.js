Template[getTemplate('postTitleWeld')].helpers({
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  }
});

Template[getTemplate('postTitleWeld')].events({
  'click a.post-title': function(e) {
    e.stopPropagation();
  }
});