Template.membersPage.rendered = function (){

  dropdownFilter.init();

  $('[data-js="mixitup"]').mixItUp({
    animation: { 
      duration: 100,
      effects: 'fade'
    },
    load: {
      sort: 'random'
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
  $('.skills-select .option').each(function() {
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
  // Mixitup using selected option from select menu
  'click .sort': function(e) {
    var sort = $(this).data('sort');
    $('[data-js="mixitup"]').mixItUp('sort', sort);
  }
});

Template.membersPage.destroyed = function() {
  $('[data-js="mixitup"]').mixItUp('destroy', true);
};

// To keep our code clean and modular, all custom functionality will be contained inside a single object literal called "dropdownFilter".
var dropdownFilter = {
  // Declare any variables we will need as properties of the object
  $filters: null,
  $reset: null,
  groups: [],
  outputArray: [],
  outputString: '',
  
  // The "init" method will run on document ready and cache any jQuery objects we will need.
  init: function(){
    var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "dropdownFilter" object so that we can share methods and properties between all parts of the object.
    self.$filters = $('[data-js="filters"]');
    self.$reset = $('[data-js="reset"]');
    self.$container = $('[data-js="mixitup"]');
    self.$filters.find('[data-js="select-wrap"]').each(function(){
      self.groups.push({
        $dropdown: $(this).find('[data-js="select-dropdown"]'),
        active: ''
      });
    });
    self.bindHandlers();
  },
  
  // The "bindHandlers" method will listen for whenever a select is changed. 
  bindHandlers: function(){
    var self = this;
    // Handle select change
    self.$filters.on('change', '[data-js="select-dropdown"]', function(e) {
      e.preventDefault();
      self.parseFilters();
      $(this).addClass('active');
      // // Get sort text, remove first character
      // var sortText = self.outputString.substring(1);
      // // Reset tags active state
      // $('.member-skill').removeClass('active');
      // // Highlight tag that's being filtered
      // $('.member-skill:contains("' + sortText + '")').addClass('active');
    });

    // Handle reset click
    self.$reset.on('click', function(e){
      e.preventDefault();
      self.$filters.find('[data-js="select-dropdown"]').val('');
      // // Get sort text, remove first character
      // $('.member-skill').removeClass('active');
      self.parseFilters();
      $('.toggle').removeClass('active');
    });
  },
  
  // The parseFilters method pulls the value of each active select option
  parseFilters: function(){
    var self = this;
    // loop through each filter group and grap the value from each one.
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$dropdown.val();
    }
    self.concatenate();
  },
  
  // The "concatenate" method will crawl through each group, concatenating filters as desired:
  concatenate: function(){
    var self = this;
    self.outputString = ''; // Reset output string
    for(var i = 0, group; group = self.groups[i]; i++){
      self.outputString += group.active;
    }
    // If the output string is empty, show all rather than none
    !self.outputString.length && (self.outputString = 'all'); 
    // console.log(self.outputString); 
    // ^ we can check the console here to take a look at the filter string that is produced
    // Send the output string to MixItUp via the 'filter' method:
    if(self.$container.mixItUp('isLoaded')){
      self.$container.mixItUp('filter', self.outputString);
    }
  }
};
