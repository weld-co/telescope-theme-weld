Template[getTemplate('calendar')].helpers({
  options: function() {
    return {
      dayClick: function (date, jsEvent, view) {
        $('.content').addClass('no-scroll');
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
  'click .close-button': function(e) {
    $('.content').removeClass('no-scroll');
    $('.modal').removeClass('is-open');
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
      submitButton.prop('disabled', false);
      if (formEl.find('[value=studio]').is(':checked')) {
        $('.modal').toggleClass('is-open submitted');
      } else {
        $('.content').removeClass('no-scroll');
        $('.modal').removeClass('is-open');
      }
    });
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