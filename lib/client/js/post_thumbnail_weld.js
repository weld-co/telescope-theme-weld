Template[getTemplate('postThumbnailWeld')].helpers({
  postLink: function () {
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  playVideoClass: function () {
    return !!this.media ? 'post-thumbnail-has-video': '';
  },
  videoTemplate: function () {
    return getTemplate('postVideo');
  }
});