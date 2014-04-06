
var express   = require('express'),
    app       = express(),
    colors    = require('colors'),
    router    = require('./router.js'),
    config    = require('./config.js'),
    http      = require('http');

// setup here
config(app);

// setup endpoints
router(app);

// start the server
http.createServer(app).listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')).blue);
});
