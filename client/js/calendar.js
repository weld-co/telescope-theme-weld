Template[getTemplate('calendarDallas')].helpers({
  options: function() {
    return {
      googleCalendarApiKey: 'AIzaSyBIlDqn_nlwT_z-_KrgJ5xSOMTcKEt5Ruo',
      eventSources: [
        { googleCalendarId: 'weldspaces@gmail.com' },
        { googleCalendarId: 'gf3npoellf6lltok7u21gfipdg@group.calendar.google.com', className: 'meeting-room'}
      ],
      dayClick: function (date, jsEvent, view) {
        $('body').addClass('no-scroll').scrollTop(0);
        $('.modal').addClass('is-open');
        $('.date').val( date.format('MMMM Do') );
      },
      eventClick: function(event) {
        if (event.url) {
          window.open(event.url);
          return false;
        }
      },
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

Template[getTemplate('calendarNashville')].helpers({
  options: function() {
    return {
      googleCalendarApiKey: 'AIzaSyBIlDqn_nlwT_z-_KrgJ5xSOMTcKEt5Ruo',
      eventSources: [
        { googleCalendarId: 'vmmlvl1gl7v7g9h6as6akgsm5g@group.calendar.google.com' },
        { googleCalendarId: '7qrmnrkchpj3cs9dqa8hsjumh4@group.calendar.google.com', className: 'meeting-room'}
      ],
      dayClick: function (date, jsEvent, view) {
        $('body').addClass('no-scroll').scrollTop(0);
        $('.modal').addClass('is-open');
        $('.date').val( date.format('MMMM Do') );
      },
      eventClick: function(event) {
        if (event.url) {
          window.open(event.url);
          return false;
        }
      },
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

Template.calendarModal.events({
  // Close the modal
  'click .close-button': function(e) {
    closeModal();
  },
  // Submit Form and Trigger Tip Reminder
  'submit .new-event-form': function(e) {
    // TODO: figure out a way to make these DRY
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

// Initiate Datepicker Plugin
Template.calendarDallas.rendered = function () {
  datepickerInit();
}

Template.calendarNashville.rendered = function () {
  datepickerInit();
}

function datepickerInit() {
  $('.datepicker').pickadate({
    format: 'dddd, mmmm d',
    formatSubmit: 'mm/dd/yyyy',
    hiddenName: true
  });
  $('.timepicker').pickatime();
};

function closeModal() {
  $('body').removeClass('no-scroll');
  $('.modal').removeClass('is-open submitted');
};
