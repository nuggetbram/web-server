var express = require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuthentification: function(req, res, next) {
        next();
    },
    logger: function(req, res, next) {
        var date = new Date().toString();
        console.log(req.method + '' + req.originalUrl + ' at ' + date);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentification, function(req, res) {
    res.send('About Uss');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('Server Started on port: ' + port);
});