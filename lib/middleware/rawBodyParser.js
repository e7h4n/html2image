module.exports = function (req, res, next) {
    var body = '';
    req.setEncoding('utf-8');

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        req.rawBody = body;
        next();
    });
};
