Template[getTemplate('post_submit_weld')].events({
  'click .formatting': function(e) {
    $(".cheatsheet").toggleClass( "open" );
  }
});

Template[getTemplate('post_edit_weld')].events({
  'click .formatting': function(e) {
    $(".cheatsheet").toggleClass( "open" );
  }
});

Template[getTemplate('comment_form_weld')].events({
  'click .formatting': function(e) {
    $(".cheatsheet").toggleClass( "open" );
  }
});