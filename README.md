## Use the customized fork of Telescope at [weld-co/Telescope](https://github.com/weld-co/Telescope).  

### Or manually edit your own clone of [TelescopeJS/Telescope](https://github.com/TelescopeJS/Telescope).

In `.meteor/packages` comment out:

`telescope-theme-hubble`  
`telescope-theme-base`  

and add: 
```
# Custom Packages
telescope-theme-weld
mystor:device-detection
archive:jquery-dotdotdot
multiply:iron-router-progress
fastclick
```  

Look in `/welderwire-overrides` folder copy contents of `main_weld.html` and paste over `/Telescope/client/main.html`

Add to privacyOptions in `publications.js` at line 25  

```javascript
'profile.instagram': true, // #WELD customized to show instagram
'profile.email': true, // #WELD customized to show email
'profile.phone': true, // #WELD customized to show phone

```  

Add to postSchemaObject body in `posts.js` at line 58  

```javascript
instructions: '**bold**   *italic*   ![](http://link/to/image.jpg)'
```

(C) WELD 2014. All rights reserved. 
