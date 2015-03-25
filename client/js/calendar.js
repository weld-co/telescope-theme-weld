Template[getTemplate('calendar')].helpers({
  options: function() {
    return {
      dayClick: function (date, jsEvent, view) {
        $('body').addClass('no-scroll');
        $('.modal').addClass('is-open');
        $('.date').val( date.format('MMMM Do') );
      },
      eventClick: function(event) {
        if (event.url) {
          window.open(event.url);
          return false;
        }
      },
      googleCalendarApiKey: 'AIzaSyBIlDqn_nlwT_z-_KrgJ5xSOMTcKEt5Ruo',
      eventSources: [
        { googleCalendarId: 'weldspaces@gmail.com' },
        { googleCalendarId: 'gf3npoellf6lltok7u21gfipdg@group.calendar.google.com', className: 'meeting-room'}
      ],
      theme: true,
      header: {
        left: 'title',
        right: 'today prev,next month,agendaWeek'
      },
      allDaySlot: false,
      displayEventEnd: {
        month: true
      }
    };
  }
});

Template[getTemplate('calendar')].events({
  // Close the modal
  'click .close-button': function(e) {
    $('body').removeClass('no-scroll');
    $('.modal').removeClass('is-open submitted');
  },
  // Submit Form and Trigger Tip Reminder
  'submit .new-event-form': function(e) {
    e.preventDefault();
    var formEl = $(e.target);
    var submitButton = $('input[type=submit]', formEl);
    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
        submitButton.prop('disabled', 'disabled');
      }
    }).done(function(data) {
      $('body').removeClass('no-scroll');
      submitButton.prop('disabled', false);
      // If Studio Booking, show tip message
      if (formEl.find('[value=studio]').is(':checked')) {
        $('.modal').toggleClass('is-open studio-event');
      } else {
        // If Meeting Booking, show Thanks & Refresh message
        $('.modal').toggleClass('is-open meeting-event');
      }
    });
  },
  // Refresh the page to see calendar event 
  // TODO: figure out .fullcalender('rerenderEvents') method
  'click .refresh': function(e) {
    location.reload();
  }
});

Template.calendar.rendered = function () {
  $('.datepicker').pickadate({
    format: 'dddd, mmmm d',
    formatSubmit: 'mm/dd/yyyy',
    hiddenName: true
  });
  $('.timepicker').pickatime();
}