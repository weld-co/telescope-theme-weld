Template.postTitleWeld.rendered = function (){
  $(".posts.list .truncate").dotdotdot({
    watch: "window"
  });
  $(".post_page_weld .truncate").remove();
};