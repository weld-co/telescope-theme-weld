Template[getTemplate('userStatus')].helpers({
  currentStatus: function () {
    if (this.status.idle)
      return "isIdle"
    else if (this.status.online)
      return "isOnline"
    else
      return "hide-status"
  }
});