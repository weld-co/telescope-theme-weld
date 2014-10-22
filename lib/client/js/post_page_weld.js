Template[getTemplate('post_page_weld')].events({
  'click a.back-link': function(e) {
    if(document.referrer.indexOf(window.location.hostname) >= 0) {
        history.go(-1);
    }
    else {
        window.location.href = '/';
    }
  }
});