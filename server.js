var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentification, function(req, res) {
    res.send('About Uss');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('Server Started on port: ' + port);
});