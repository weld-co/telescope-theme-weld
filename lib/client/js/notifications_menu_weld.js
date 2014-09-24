Template[getTemplate('notificationsMenuWeld')].helpers({
  notification_count_weld: function(){
    var notifications=Notifications.find({userId: Meteor.userId(), read: false}).fetch();
    if(notifications.length==0){
      return i18n.t('0');
    }else if(notifications.length==1){
      return i18n.t('1');
    }else{
      return notifications.length;
    }
  }
});