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

    // SCSS Compiled/Prefixed with fourseven:scss

    // Includes
    'client/scss/includes/_breakpoints.scss',
    'client/scss/includes/_colors.scss',
    'client/scss/includes/_mixins.scss',

    // Global
    'client/scss/global/_global.scss',
    'client/scss/global/_animation.scss',
    'client/scss/global/_grid.scss',
    'client/scss/global/_layout.scss',
    'client/scss/global/_forms.scss',
    'client/scss/global/_markdown.scss',
    'client/scss/global/_tables.scss',
    'client/scss/global/_links.scss',
    'client/scss/global/_type.scss',

    // Modules
    'client/scss/modules/_progress-bar.scss',
    'client/scss/modules/_loader.scss',
    'client/scss/modules/_accounts.scss',
    'client/scss/modules/_logo.scss',
    'client/scss/modules/_search.scss',
    'client/scss/modules/_post-info.scss',
    'client/scss/modules/_avatars.scss',
    'client/scss/modules/_login.scss',
    'client/scss/modules/_errors.scss',
    'client/scss/modules/_header.scss',
    'client/scss/modules/_notifications.scss',
    'client/scss/modules/_posts.scss',
    'client/scss/modules/_categories.scss',
    'client/scss/modules/_feeds.scss',
    'client/scss/modules/_post-categories.scss',
    'client/scss/modules/_profile.scss',
    'client/scss/modules/_users.scss',
    'client/scss/modules/_members.scss',
    'client/scss/modules/_pages.scss',
    'client/scss/modules/_sidebar.scss',
    'client/scss/modules/_comments.scss',
    'client/scss/modules/_newsletter.scss',
    'client/scss/modules/_non-member.scss',
    'client/scss/modules/_member-menu.scss',
    'client/scss/modules/_thumbnails.scss',
    'client/scss/modules/_calendar.scss',

    // Final Imports
    'client/scss/main.scss',

    // Overrides 
    'client/templates/calendar.html',
    'client/templates/categories_menu_weld.html',
    'client/templates/comment_form_weld.html',
    'client/templates/comment_list_weld.html',
    'client/templates/comment_item_weld.html',
    'client/templates/custom_css.html',
    'client/templates/header_weld.html',
    'client/templates/layout_weld.html',
    'client/templates/loading_weld.html',
    'client/templates/menu_item_weld.html',
    'client/templates/message_item_weld.html',
    'client/templates/newsletter_banner_weld.html',
    'client/templates/no_rights_weld.html',
    'client/templates/not_found_weld.html',
    'client/templates/notifications_menu_weld.html',
    'client/templates/post_avatars_weld.html',
    'client/templates/post_domain_weld.html',
    'client/templates/post_info_weld.html',
    'client/templates/post_title_weld.html',
    'client/templates/post_item_weld.html',
    'client/templates/post_thumbnail_weld.html',
    'client/templates/posts_list_weld.html',
    'client/templates/posts_load_more_weld.html',
    'client/templates/search_weld.html',
    'client/templates/sign_out_weld.html',
    'client/templates/submit_button_weld.html',
    'client/templates/user_account_weld.html',
    'client/templates/user_info_weld.html',
    'client/templates/user_invites_weld.html',
    'client/templates/user_menu_weld.html',
    'client/templates/user_item_weld.html',
    'client/templates/users_weld.html',
    'client/templates/views_menu_weld.html',

    // Additions
    'client/templates/logo.html',
    'client/templates/sidebar.html',
    'client/templates/loader_weld.html',
    'client/templates/members_menu_weld.html',
    'client/templates/members_page.html',
    'client/templates/members_item.html',

    // Plugins
    'client/js/dotdotdot_init.js',
    'client/js/fastclick_init.js',
    'client/js/device_detection.js',
    'client/js/progress_bar.js',

    // Customizations
    'client/js/weld.js',
    'client/js/base_weld.js',
    'client/js/calendar.js',
    'client/js/comment_item_weld.js',
    'client/js/header_weld.js',
    'client/js/no_rights_weld.js',
    'client/js/members_page.js',
    'client/js/notifications_menu_weld.js',
    'client/js/post_avatars_weld.js',
    'client/js/post_domain_weld.js',
    'client/js/post_info_weld.js',
    'client/js/post_item_weld.js',
    'client/js/post_title_weld.js',
    'client/js/post_thumbnail_weld.js', 
    'client/js/sidebar.js',
    'client/js/user_account_weld.js',
    'client/js/user_info_weld.js',

    // Routes
    'client/routes/members.js',
    'client/routes/book.js',

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
    'img/plus-icon.svg',
    'img/updown-icon.svg',
    'img/mobile-navicon.svg'
  ], ['client']);

  api.addFiles([
    'server/js/template_overwrites.js',
    'server/js/reset_password_url_fix.js',
    'server/js/members_publication.js',
    'server/templates/emailWrapperWeld.handlebars',
    'server/templates/emailNewPostWeld.handlebars',
    'server/templates/emailNewCommentWeld.handlebars',
    'server/templates/emailPostItemWeld.handlebars',
    'server/templates/emailDigestWeld.handlebars'
  ], ['server']);

  // Used for /purchases redirect
  api.addFiles([
    'server/js/purchase.js'
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
