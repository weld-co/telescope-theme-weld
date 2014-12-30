Template[getTemplate('post_page')].rendered = function(){
  $('html,body').scrollTop();
  var scroll_top = $('div.content').offset();
  $('main.content-wrap').scrollTop(scroll_top.top);
};
