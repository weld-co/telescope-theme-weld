viewNav = [
  {
    route: 'posts_new',
    label: 'Newest'
  },
  {
    route: 'posts_recently_commented',
    label: 'Recently Commented'
  }  
];

primaryNav = [
  'viewsMenu',
  'categoriesMenu',
  'membersMenu',
  'adminMenu'
];

secondaryNav = [
  'userMenu', 
  'notificationsMenu',
  'search'
];

postModules = [
  {
    template: 'postContent', 
    position: 'center-center'
  },
  {
    template: 'postThumbnail', 
    position: 'center-left'
  }
];

postMeta = [
  {
    template: 'postInfo',
    order: 1
  }
]