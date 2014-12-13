Template[getTemplate('posts_list_weld')].events({
  'click .post a': function(e) {
    e.stopPropagation();
  },
  'click .post': function(e) {
    var post = this;
    Router.go("/posts/"+post._id);
  }
});

Template[getTemplate('post_item_weld')].rendered = function(){
  $("svg.post-loading").delay(1000).fadeOut("slow", function() {
    $(this).remove();
  });
};
