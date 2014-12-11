Template.postTitleWeld.rendered = function (){
  $("div.truncate").dotdotdot({
    watch: "window"
  });
  $("div.post_page_weld div.truncate").remove();
};