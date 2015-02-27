Template[getTemplate('bookPage')].helpers({
  options: function() {
    return {
      defaultView: 'month',
      theme: true
    };
  }
});

Template.bookPage.rendered = function (){
  $('.weld-calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyBIlDqn_nlwT_z-_KrgJ5xSOMTcKEt5Ruo',
        events: [
            {
                googleCalendarId: 'weldspaces@gmail.com'
            },
            {
                googleCalendarId: 'gf3npoellf6lltok7u21gfipdg@group.calendar.google.com',
            }
        ]
    });
};
