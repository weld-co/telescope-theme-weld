Template[getTemplate('posts_list_weld')].events({
  'click .post a': function(e) {
    // keeps links from triggering .post handler below
    e.stopPropagation();
  },
  'click .post': function(e) {
    // click anywhere on a post to view it
    var post = this;
    Router.go("/posts/"+post._id);
    // Jump to top of scrollable elements
    $('html,body').scrollTop();
    var scroll_top = $('div.content').offset();
    $('main.content-wrap').scrollTop(scroll_top.top).delay(300);
  }
});