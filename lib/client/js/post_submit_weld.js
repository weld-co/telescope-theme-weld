Template[getTemplate('post_submit_weld')].events({
  'click span.formatting, click div.close-icon': function(e) {
    $(".modal-container").toggleClass( "open" );
  }
});

Template[getTemplate('post_edit_weld')].events({
  'click span.formatting, click div.close-icon': function(e) {
    $(".modal-container").toggleClass( "open" );
  }
});

Template[getTemplate('comment_form_weld')].events({
  'click span.formatting, click div.close-icon': function(e) {
    $(".modal-container").toggleClass( "open" );
  }
});