Package.describe({ 
    summary: "Telescope WELD Theme Package",
    version: '0.3.0',
    name: "telescope-theme-weld"
});

Package.on_use(function (api) {

  api.use([
    'templating',
    'telescope-tags',
    'telescope-search',
    'telescope-embedly',
    'telescope-newsletter'
  ], ['client']);

  api.use([
    'iron:router',
    'telescope-base',
    'telescope-lib',
    'fourseven:scss'
  ], ['client', 'server']);

  api.use('cmather:handlebars-server');
  api.use('webapp', 'server') 

  api.addFiles([

    // SCSS Compiled & autoprefixed with fourseven:scss
    'lib/client/scss/main.scss',

    // Overrides 
    'lib/client/templates/categories_menu_weld.html',
    'lib/client/templates/comment_form_weld.html',
    'lib/client/templates/comment_list_weld.html',
    'lib/client/templates/comment_item_weld.html',
    'lib/client/templates/custom_css.html',
    'lib/client/templates/header_weld.html',
    'lib/client/templates/layout_weld.html',
    'lib/client/templates/loading_weld.html',
    'lib/client/templates/members_page.html',
    'lib/client/templates/members_item.html',
    'lib/client/templates/menu_item_weld.html',
    'lib/client/templates/message_item_weld.html',
    'lib/client/templates/newsletter_banner_weld.html',
    'lib/client/templates/no_rights_weld.html',
    'lib/client/templates/not_found_weld.html',
    'lib/client/templates/notifications_menu_weld.html',
    'lib/client/templates/post_avatars_weld.html',
    'lib/client/templates/post_domain_weld.html',
    'lib/client/templates/post_info_weld.html',
    'lib/client/templates/post_title_weld.html',
    'lib/client/templates/post_item_weld.html',
    'lib/client/templates/post_thumbnail_weld.html',
    'lib/client/templates/posts_list_weld.html',
    'lib/client/templates/posts_load_more_weld.html',
    'lib/client/templates/search_weld.html',
    'lib/client/templates/sidebar.html',
    'lib/client/templates/sign_out_weld.html',
    'lib/client/templates/submit_button_weld.html',
    'lib/client/templates/user_account_weld.html',
    'lib/client/templates/user_info_weld.html',
    'lib/client/templates/user_invites_weld.html',
    'lib/client/templates/user_menu_weld.html',
    'lib/client/templates/user_item_weld.html',
    'lib/client/templates/users_weld.html',
    'lib/client/templates/views_menu_weld.html',

    // Additions
    'lib/client/templates/loader_weld.html',
    'lib/client/templates/members_menu_weld.html',
    'lib/client/templates/logo.html',

    // Plugins
    'lib/client/js/dotdotdot_init.js',
    'lib/client/js/fastclick_init.js',
    'lib/client/js/device_detection.js',
    'lib/client/js/progress_bar.js',

    // Customizations
    'lib/client/js/weld.js',
    'lib/client/js/base_weld.js',
    'lib/client/js/comment_item_weld.js',
    'lib/client/js/header_weld.js',
    'lib/client/js/no_rights_weld.js',
    'lib/client/js/members.js',
    'lib/client/js/members_page.js',
    'lib/client/js/notifications_menu_weld.js',
    'lib/client/js/post_avatars_weld.js',
    'lib/client/js/post_domain_weld.js',
    'lib/client/js/post_info_weld.js',
    'lib/client/js/post_item_weld.js',
    'lib/client/js/post_title_weld.js',
    'lib/client/js/post_thumbnail_weld.js', 
    'lib/client/js/sidebar.js',
    'lib/client/js/user_account_weld.js',
    'lib/client/js/user_info_weld.js',

    // Images
    'img/favicon.ico',
    'img/favicon-16x16.png',
    'img/favicon-32x32.png',
    'img/favicon-96x96.png',
    'img/favicon-160x160.png',
    'img/favicon-192x192.png',
    'img/apple-touch-icon-57x57.png',
    'img/apple-touch-icon-60x60.png',
    'img/apple-touch-icon-72x72.png',
    'img/apple-touch-icon-76x76.png',
    'img/apple-touch-icon-114x114.png',
    'img/apple-touch-icon-120x120.png',
    'img/apple-touch-icon-144x144.png',
    'img/apple-touch-icon-152x152.png',
    'img/apple-touch-icon-180x180.png',
    'img/weld_logo.png',
    'img/checkbox.svg',
    'img/checkbox-checked.svg',
    'img/search.svg',
    'img/close-icon.svg',
    'img/mobile-navicon.svg'
  ], ['client']);

  api.addFiles([
    'lib/server/js/template_overwrites.js',
    'lib/server/js/reset_password_url_fix.js',
    'lib/server/js/members_publication.js',
    'lib/server/templates/emailWrapperWeld.handlebars',
    'lib/server/templates/emailNewPostWeld.handlebars',
    'lib/server/templates/emailNewCommentWeld.handlebars',
    'lib/server/templates/emailPostItemWeld.handlebars',
    'lib/server/templates/emailDigestWeld.handlebars'
  ], ['server']);

  // Used for /purchases redirect
  api.addFiles([
    'lib/server/js/purchase.js'
  ], ['server']);

  api.export([
    'viewsMenu',
    'primaryNav',
    'secondaryNav',
    'postModules',
    'postMeta',
    'userProfileDisplay'
  ]);

});
