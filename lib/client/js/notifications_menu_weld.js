// removed i18n because it wasn't showing up

Template[getTemplate('notificationsMenuWeld')].helpers({

  notificationCountWeld: function(){
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}).fetch();
    if(notifications.length==0){
      return 'No Notifications';
    }else if(notifications.length==1){
      return '1 Notification';
    }else{
      return notifications.length+' '+'Notifications';
    }
  }
});