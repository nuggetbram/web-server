

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

module.exports = middleware;