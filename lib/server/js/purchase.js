// Redirect /purchases to same path on different domain
WebApp.connectHandlers
  .use('/purchase', function(req, res, next) {
  // 301 Moved Permanently
  res.writeHead(301, {
    'Location': 'https://plasso.co/s/6gzxE8Ft4Y'
  });
  res.end();
});