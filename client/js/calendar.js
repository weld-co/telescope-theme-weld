Template[getTemplate('calendarDallas')].helpers({
  options: function() {
    return {
      googleCalendarApiKey: Meteor.settings.public.googleCalenderApiKey,
      eventSources: [
        { googleCalendarId: Meteor.settings.public.dallasCalendar.studio },
        { googleCalendarId: Meteor.settings.public.dallasCalendar.meeting, className: 'meeting-room'}
      ],
      dayClick: function (date, jsEvent, view) {
        $('html, body, .content').scrollTop(0).scrollLeft(0);
        $('body').addClass('no-scroll');
        $('.modal').addClass('is-open new-event');
        $('[name=date]').val( date.format('MMMM Do') );
      },
      eventClick: function(event, jsEvent, view) {
        $('html, body, .content').scrollTop(0).scrollLeft(0);
        $('body').addClass('no-scroll');
        $('.modal').addClass('is-open edit-event');
        $('[name=oldDate], [name=newDate]').val( moment(event.start).format('dddd, MMMM Do') );
        $('[name=oldStartTime], [name=newStartTime]').val( moment(event.start).format('h:mm A') );
        $('[name=oldEndTime], [name=newEndTime]').val( moment(event.end).format('h:mm A') );
      },
      eventRender: function (event, element) {
        element.attr('href', 'javascript:void(0);');
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
      googleCalendarApiKey: Meteor.settings.public.googleCalenderApiKey,
      eventSources: [
        { googleCalendarId: Meteor.settings.public.nashvilleCalendar.studio },
        { googleCalendarId: Meteor.settings.public.nashvilleCalendar.meeting, className: 'meeting-room'}
      ],
      dayClick: function (date, jsEvent, view) {
        $('html, body, .content').scrollTop(0).scrollLeft(0);
        $('body').addClass('no-scroll');
        $('.modal').addClass('is-open new-event');
        $('[name=date]').val( date.format('MMMM Do') );
      },
      eventClick: function(event, jsEvent, view) {
        $('html, body, .content').scrollTop(0).scrollLeft(0);
        $('body').addClass('no-scroll');
        $('.modal').addClass('is-open edit-event');
        $('[name=oldDate], [name=newDate]').val( moment(event.start).format('dddd, MMMM Do') );
        $('[name=oldStartTime], [name=newStartTime]').val( moment(event.start).format('h:mm A') );
        $('[name=oldEndTime], [name=newEndTime]').val( moment(event.end).format('h:mm A') );
      },
      eventRender: function (event, element) {
        element.attr('href', 'javascript:void(0);');
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

  // Open new event modal from mobile button
  'click .mobile-new-event': function(e) {
    openNewEventModal();
  },

  // Close the modal
  'click .close-button': function(e) {
    closeModal();
  },

  // Submit Form and Trigger Tip Reminder
  'submit .new-event-form': function(e) {
    e.preventDefault();
    var formEl = $(e.target);
    var submitButton = $('input[type=submit]', formEl);
    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: { javascript: 'application/javascript' },
      data: formEl.serialize(),
      beforeSend: function() { submitButton.attr('disabled', 'disabled'); }
    }).done(function(data) {
      submitButton.attr('disabled', false);
      // If Studio Booking, show studio message
      if (formEl.find('[value=studio]').is(':checked')) {
        $('.modal').toggleClass('new-event studio-event-submitted');
      }
      // If Meeting Booking, show meeting message
      if (formEl.find('[value=meeting-room]').is(':checked')) {
        $('.modal').toggleClass('new-event meeting-event-submitted');
      }
      // If Editing Booking, show edit message
      if (formEl.is(this)) {
        $('.modal').toggleClass('edit-event edit-event-submitted');
      }
    });
  },

  'submit .edit-event-form': function(e) {
    // TODO: figure out a way to make these DRY
    e.preventDefault();
    var formEl = $(e.target);
    var submitButton = $('input[type=submit]', formEl);
    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      dataType: "json",
      data: formEl.serialize(),
      beforeSend: function() { submitButton.attr('disabled', 'disabled'); }
    }).done(function(data) {
      submitButton.attr('disabled', false);
      // If Editing Booking, show edit message
      $('.modal').toggleClass('edit-event edit-event-submitted');
    });
  },

  // Enable submit button after selecting space to reserve
  'change [value=meeting-room], change [value=studio]': function(e) {
    $('input[type=submit]').attr('disabled', false);
  },

  //  Enable fields when selecting change
  'change #change': function(e) {
    $('[name=newDate], [name=newStartTime], [name=newEndTime]').removeAttr('disabled', 'disabled');
  },

  // Disable field when selecing cancel
  'change #cancel': function(e) {
    $('[name=newDate], [name=newStartTime], [name=newEndTime]').attr('disabled', 'disabled');
  },

  // Refresh the page to see calendar event
  'click .refresh': function(e) {
    location.reload();
  }
});

// Initiate Datepicker Plugin
Template.calendarDallas.rendered = function () {
  datepickerInit();
};
Template.calendarNashville.rendered = function () {
  datepickerInit();
};

function openNewEventModal() {
  $('html, body, .content').scrollTop(0).scrollLeft(0);
  $('body').addClass('no-scroll');
  $('.modal').addClass('is-open new-event');
};

function datepickerInit() {
  $('.datepicker').pickadate({
    format: 'dddd, mmmm d'
  });
  $('.timepicker').pickatime({
    min: [5,0],
    max: [24,0]
  });
};

function closeModal() {
  $('body').removeClass('no-scroll');
  $('.modal').removeClass('is-open new-event edit-event');
};
