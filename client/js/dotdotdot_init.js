Template.postTitleWeld.rendered = function (){
  $("div.truncate").dotdotdot({
    watch: "window"
  });
  $("div.postPageWeld div.truncate").remove();
};