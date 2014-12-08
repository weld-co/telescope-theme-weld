Template.postTitleWeld.rendered = function (){
  $(function(){
    $(".truncate").dotdotdot({
      watch: "window"
    });
    $(".post_page_weld .truncate").remove();
  });
};