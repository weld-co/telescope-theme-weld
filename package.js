Package.describe({ 
    summary: "Telescope WELD Theme Package",
    version: '0.2.0',
    name: "telescope-theme-weld"
});

Package.on_use(function (api) {

  api.use([
    'templating',
    'telescope-tags',
    'telescope-search',
    'telescope-module-embedly',
    'telescope-notifications',
    'telescope-newsletter'
  ], ['client']);

  api.use([
    'iron:router',
    'telescope-base',
    'telescope-lib'
  ], ['client', 'server']);

  api.use('cmather:handlebars-server');

  api.add_files([
    'lib/client/stylesheets/main.css',

    'lib/client/templates/categories_menu_weld.html',
    'lib/client/templates/cheatsheet.html',
    'lib/client/templates/comment_form_weld.html',
    'lib/client/templates/comment_item_weld.html',
    'lib/client/templates/error_item_weld.html',
    'lib/client/templates/footer_weld.html',
    'lib/client/templates/layout_weld.html',
    'lib/client/templates/loading_weld.html',
    'lib/client/templates/loader_weld.html',
    'lib/client/templates/members_menu_weld.html',
    'lib/client/templates/mobile_nav_weld.html',
    'lib/client/templates/nav_weld.html',
    'lib/client/templates/newsletter_banner_weld.html',
    'lib/client/templates/no_invite_weld.html',
    'lib/client/templates/no_rights_weld.html',
    'lib/client/templates/not_found_weld.html',
    'lib/client/templates/notifications_menu_weld.html',
    'lib/client/templates/post_domain_weld.html',
    'lib/client/templates/post_edit_weld.html',
    'lib/client/templates/post_info_weld.html',
    'lib/client/templates/post_page_weld.html',
    'lib/client/templates/post_submit_weld.html',
    'lib/client/templates/post_thumbnail_weld.html',
    'lib/client/templates/post_title_weld.html',
    'lib/client/templates/posts_list_weld.html',
    'lib/client/templates/posts_load_more_weld.html',
    'lib/client/templates/search_weld.html',
    'lib/client/templates/sidebar.html',
    'lib/client/templates/submit_button_weld.html',
    'lib/client/templates/user_edit_weld.html',
    'lib/client/templates/user_menu_weld.html',
    'lib/client/templates/user_profile_weld.html',
    'lib/client/templates/views_menu_weld.html',

    'lib/client/js/dotdotdot_init.js',
    'lib/client/js/fastclick_init.js',
    'lib/client/js/weld.js',
    'lib/client/js/base_weld.js',
    'lib/client/js/avatar_weld.js',
    'lib/client/js/mobile_nav_weld.js',
    'lib/client/js/newsletter_banner_weld.js',
    'lib/client/js/notifications_menu_weld.js',
    'lib/client/js/post_domain_weld.js',
    'lib/client/js/post_info_weld.js',
    'lib/client/js/post_submit_weld.js',
    'lib/client/js/post_thumbnail_weld.js', 
    'lib/client/js/progress_bar.js',
    'lib/client/js/sidebar.js',
    'lib/client/js/user_profile_weld.js',

    'img/apple-touch-icon-120.png',
    'img/apple-touch-icon-180.png',
    'img/apple-touch-icon-152.png',
    'img/apple-touch-icon-76.png',
    'img/favicon.ico',
    'img/favicon.png',
    'img/weld_logo.png',
    'img/avatar_blank.png'

  ], ['client']);

  api.add_files([
    'lib/server/js/template_overwrites.js',
    'lib/server/js/reset_password_url_fix.js',
    'lib/server/templates/emailWrapperWeld.handlebars',
    'lib/server/templates/emailNewPostWeld.handlebars',
    'lib/server/templates/emailNewCommentWeld.handlebars',
    'lib/server/templates/emailPostItemWeld.handlebars',
    'lib/server/templates/emailDigestWeld.handlebars'
  ], ['server']);

  api.export([
    'viewNav',
    'primaryNav',
    'secondaryNav',
    'postModules',
    'postMeta'
  ]);

});
