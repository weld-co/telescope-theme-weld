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
      return i18n.t('0');
    }else if(notifications.length==1){
      return i18n.t('1');
    }else{
      return notifications.length;
    }
  },
  notification_class: function(){
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}).fetch();
    if(notifications.length==0)
      return 'no-notifications';
  }
});

Template[getTemplate('notificationsMenuWeld')].events({
  'click .notifications-toggle': function(e){
    e.preventDefault();
    $('body').toggleClass('notifications-open');
  },
  'click .mark-as-read': function(){
    Meteor.call('markAllNotificationsAsRead', 
      function(error, result){
        error && console.log(error);
      }
    );
  }
});