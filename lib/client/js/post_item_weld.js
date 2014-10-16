Template[getTemplate('post_item_weld')].events({
  'click .post': function(e) {
    var post = this;
    Router.go("/posts/"+post._id);
  }
});
