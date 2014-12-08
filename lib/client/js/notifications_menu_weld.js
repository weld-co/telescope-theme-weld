// Recreated notification_count_weld to just show length (removed i18n)

Template[getTemplate('notificationsMenuWeld')].helpers({
  notificationItem: function () {
    return getTemplate('notificationItem');
  },
  notifications: function(){
    return Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}});
  },
  hasNotifications: function () {
    return !!Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).count();    
  },
  notification_count_weld: function(){
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}).fetch();
    if(notifications.length==0){
      return 'No Notifications';
    }else if(notifications.length==1){
      return '1 Notification';
    }else{
      return notifications.length+' '+'Notifications';
    }
  },
  notification_class: function(){
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}).fetch();
    if(notifications.length==0)
      return 'no-notifications';
  }
});

// and used heraldMarkAllAsRead instead of old method

Template[getTemplate('notificationsMenuWeld')].events({
  'click .notifications-toggle': function(e){
    e.preventDefault();
    $('body').toggleClass('notifications-open');
  },
  'click .mark-as-read': function(){
    Meteor.call('heraldMarkAllAsRead', 
      function(error, result){
        error && console.log(error);
      }
    );
  }
});