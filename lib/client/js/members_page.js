Template[getTemplate('membersPage')].helpers({
  log: function () {
    console.log(this);
  }
});

Template.membersPage.rendered = function (){

  $('#sort-container').mixItUp({
    controls: {
      toggleFilterButtons: true,
      toggleLogic: 'and'
    },
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
  $('[data-filter]').each(function() {
    var txt = $(this).text();
    if (exists[txt]) {
      $(this).remove();
    } else {
      exists[txt] = true;
    }
  });
};

Template[getTemplate('membersPage')].events({
  // Clears existing and sets to ALL
  'click [data-js="reset"]': function(e) {
    $('#sort-container').mixItUp('filter', 'all');
  },
  // Remove ALL filter when subsequent filter applied
  'click [data-filter]:not("all")': function(e) {
    $('[data-filter="all"]').removeClass('active');
  }
});

Template.membersPage.destroyed = function() {
  $('#sort-container').mixItUp('destroy', true);
};