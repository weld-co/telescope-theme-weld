Package.describe({summary: "Telescope WELD theme"});

Package.on_use(function (api) {

  api.use([
    'templating',
    'telescope-base',
    'telescope-tags',
    'telescope-search',
    'telescope-newsletter'
  ], ['client']);

  api.add_files([
    'lib/client/stylesheets/main.css',

    'lib/client/templates/categories_menu_weld.html',
    'lib/client/templates/comment_item_weld.html',
    'lib/client/templates/layout_weld.html',
    'lib/client/templates/main_weld.html',
    'lib/client/templates/mobile_nav_weld.html',
    'lib/client/templates/nav_weld.html',
    'lib/client/templates/newsletter_banner_weld.html',
    'lib/client/templates/notifications_menu_weld.html',
    'lib/client/templates/post_info_weld.html',
    'lib/client/templates/post_item_weld.html',
    'lib/client/templates/post_submit_weld.html',
    'lib/client/templates/posts_list_weld.html',
    'lib/client/templates/search_weld.html',
    'lib/client/templates/submit_button_weld.html',
    'lib/client/templates/user_menu_weld.html',
    'lib/client/templates/user_profile_weld.html',
    'lib/client/templates/views_menu_weld.html',
    'lib/client/templates/user_edit_weld.html',
    'lib/client/templates/post_domain_weld.html',
    'lib/client/templates/post_title_weld.html',
    'lib/client/templates/post_categories_weld.html',

    'lib/client/js/weld.js',
    'lib/client/js/base_weld.js',
    'lib/client/js/notifications_menu_weld.js',
    'lib/client/js/post_info_weld.js',  
    'lib/client/js/user_profile_weld.js',
    'lib/client/js/post_domain_weld.js',
    'lib/client/js/sidebar_weld.js',

    'img/apple-touch-120.png',
    'img/apple-touch-152.png',
    'img/apple-touch-76.png',
    'img/favicon.ico',
    'img/favicon.png',
    'img/startup.png',
    'img/startup@2x.png',
    'img/weld_avatar.png',
  ], ['client']);

  api.export([
    'viewNav',
    'primaryNav',
    'secondaryNav',
    'postModules',
    'postMeta'
  ]);

});
