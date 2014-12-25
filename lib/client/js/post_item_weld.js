Template[getTemplate('posts_list_weld')].events({
  'click .post a': function(e) {
    // keeps links from triggering .post handler below
    e.stopPropagation();
  },
  'click .post': function(e) {
    // click anywhere on a post to view it
    var post = this;
    Router.go("/posts/"+post._id);
  }
});

Template[getTemplate('post_item_weld')].rendered = function(){
  $("svg.post-loading").delay(500).fadeOut(300, function() {
    $(this).remove();
  });
};
