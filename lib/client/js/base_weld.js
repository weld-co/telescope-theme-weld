viewNav = [
  {
    route: 'posts_top',
    label: 'Top'
  },
  {
    route: 'posts_new',
    label: 'Latest'
  }   
];

primaryNav = [
  'viewsMenu',
  'categoriesMenu',
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