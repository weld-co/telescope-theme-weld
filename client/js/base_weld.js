viewsMenu = [
  {
    route: 'posts_new',
    label: 'new',
    description: 'newest_posts'
  },
  {
    route: 'posts_top',
    label: 'top',
    description: 'most_popular_posts'
  },
  {
    route: 'posts_best',
    label: 'best',
    description: 'highest_ranked_posts_ever'
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
    template: 'userComments', 
    order: 3
  },
  {
    template: 'userUpvotedPosts',
    order: 4
  }
];