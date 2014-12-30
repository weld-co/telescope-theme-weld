Template[getTemplate('posts_list_weld')].events({
  'click .post a': function(e) {
    // keeps links from triggering .post handler below
    e.stopPropagation();
  },
  'click .post': function(e) {
    // click anywhere on a post to view it
    var post = this;
    Router.go("/posts/"+post._id);
    $('html,body').scrollTop();
    var scroll_top = $('div.content').offset();
    $('main.content-wrap').scrollTop(scroll_top.top).delay(300);
  }
});

Template[getTemplate('post_item_weld')].rendered = function(){
  $("svg.post-loading").delay(500).fadeOut(300, function() {
    $(this).remove();
  });
};
