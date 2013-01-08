
/**
 * Module dependencies.
 */

var rawBodyParser = require('./lib/middleware/rawBodyParser');
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});


var convert = require('./routes/convert');
app.post('/convert', rawBodyParser, convert.convert);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

var browser = require('./lib/util/browser');
browser.init(function () {
    console.log("PhantomJS started.");
});
