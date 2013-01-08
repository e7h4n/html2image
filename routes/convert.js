exports.convert = function (req, res) {
    var browser = require('../lib/util/browser');

    browser.render(req.rawBody, function (type, binaryData) {
        res.set({
            'Content-Type': 'image/' + type
        });
        res.send(binaryData);
    });
};
