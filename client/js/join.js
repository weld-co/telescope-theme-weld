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
      $('body').removeClass('js-no-scroll');
      $('section').fadeIn('slow');
    }
  }
});