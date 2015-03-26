// Join Promo Page TODO: move to static hosting at join.weld.co?
Router.route('/join', {
  name: 'join',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('join'),
  layoutTemplate: 'blankLayout'
});

// Members Page
Router.route('/members', {
  name: 'members',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('membersPage'),
  waitOn: function() {
    return Meteor.subscribe('members'); 
  },
  data: function() {
    return { users: Meteor.users.find() }
  },
  fastRender: true
});

// Dallas Calendar Bookings
Router.route('/dallas-bookings', {
  name: 'dallasBookings',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('calendarDallas'),
  data: function() {
    return Meteor.user();
  },
});

// Nasvhille Calendar Bookings
Router.route('/nashville-bookings', {
  name: 'nashvilleBookings',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('calendarNashville'),
  data: function() {
    return Meteor.user();
  },
});
