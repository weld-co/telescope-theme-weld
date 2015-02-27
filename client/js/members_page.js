Template[getTemplate('membersPage')].helpers({
  log: function () {
    console.log(this);
  }
});

Template.membersPage.rendered = function (){

  $('#sort-container').mixItUp({
    animation: { 
      duration: 200,
      effects: 'fade stagger(30ms)',
      easing: 'ease'
    },
    callbacks: {
      onMixStart: function(state){
        $("span.total-number").hide();
        $("span.total").addClass("loading");
        $(".no-results").addClass("hidden");
      },
      onMixEnd: function(state){
        $("span.total").removeClass("loading");
        $("span.total-number").text((state.totalShow)).show();
      },
      onMixFail: function(state){
        $(".no-results").removeClass("hidden");
      }
    }
  });

  // remove duplicate elements from Skills filter list
  var exists = {};
  $('.option').each(function() {
    var txt = $(this).text();
    if (exists[txt]) {
      $(this).remove();
    } else {
      exists[txt] = true;
      $(this).text(txt.replace(/\-/g, " "));
    }
  });
};

Template[getTemplate('membersPage')].events({
  // Clears existing filters and sets select to default
  'click [data-js="reset"]': function(e) {
    $('#sort-container').mixItUp('filter', 'all');
    $('option[value="default"]').attr('selected', 'selected');
  },
  // Mixitup using selected option from select menu
  'change .members-select': function(e) {
    var filter = $('option:selected').val();
    $('#sort-container').mixItUp('filter', filter);
  }
});

Template.membersPage.destroyed = function() {
  $('#sort-container').mixItUp('destroy', true);
};