viewNav = [
  {
    route: 'posts_new',
    label: 'New'
  },
  {
    route: 'posts_top',
    label: 'Top'
  }
];

primaryNav = [
  'viewsMenu',
  'categoriesMenu',
  'adminMenu',
  'memberMenu'
];

secondaryNav = [
  'userMenu', 
  'notificationsMenu',
  'search'
];

postModules = [
  {
    template: 'postContent'
  }
];

postMeta = [
  {
    template: 'postAvatars',
    order: 10
  },
  {
    template: 'postInfo',
    order: 20
  }
];

userProfileDisplay = [
  {
    template: 'userInfo',
    order: 1
  },
  {
    template: 'userPosts',
    order: 2
  },
  {
    template: 'userUpvotedPosts',
    order: 3
  },  
  {
    template: 'userComments', 
    order: 5
  }
];