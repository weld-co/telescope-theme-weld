Template[getTemplate('membersPage')].helpers({
  members: function () {
    return Meteor.users.find();
  }
});

Template.memberItem.rendered = function (){
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
      },
      onMixEnd: function(state){
        $("span.total").removeClass("loading");
        $("span.total-number").text((state.totalShow)).show();
      } 
    }
  });
};

Template.memberItem.destroyed = function() {
  $('#sort-container').mixItUp('destroy', true);
};