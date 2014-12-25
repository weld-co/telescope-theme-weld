Run these commmands from your Telescope Directory:

`meteor remove telescope-theme-hubble`  
`meteor remove telescope-theme-base`  
`meteor add telescope-theme-weld`  
`meteor add archive:jquery-dotdotdot`  
`meteor add mystor:device-detection`  
`meteor add multiply:iron-router-progress`  
`meteor add fastclick`  

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
