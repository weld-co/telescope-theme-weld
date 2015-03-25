Template.join.rendered = function (){
  $('body').addClass('js-no-scroll');
},

Template[getTemplate('join')].events({
  // Prevent Enter from submiting password
  'keydown window': function(e){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  },
  'keyup .js-password': function(e){
    if ($('.js-password').val() === 'wecreateweld') {
      $('.js-protected').fadeOut('slow');
      $('#js-viewport').attr('content','width=1000px, initial-scale=1');
      $('body').removeClass('js-no-scroll');
      $('section').fadeIn('slow');
    }
  }
});