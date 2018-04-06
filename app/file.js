var log = require('./log');
var path = require('path');

exports.sendResource = function (req, res) {
    var id = req.params.id;
    log.write("File Resource ID:", id);

    switch (id) {
        case ":materialize.css":
            res.sendFile(path.resolve("../views/css/materialize.css"));
            break;
        case ":owl.carousel.min.css":
            res.sendFile(path.resolve("../views/css/owl.carousel.min.css"));
            break;
        case ":owl.theme.default.min.css":
            res.sendFile(path.resolve("../views/css/owl.theme.default.min.css"));
            break;
        case ":animate.css":
            res.sendFile(path.resolve("../views/css/animate.css"));
            break;
        case ":index.css":
            res.sendFile(path.resolve("../views/css/index.css"));
            break;
        case ":jquery-3.2.1.min.js":
            res.sendFile(path.resolve("../views/js/jquery-3.2.1.min.js"));
            break;
        case ":owl.carousel.min.js":
            res.sendFile(path.resolve("../views/js/owl.carousel.min.js"));
            break;
        case ":materialize.js":
            res.sendFile(path.resolve("../views/js/materialize.js"));
            break;
        case ":index.js":
            res.sendFile(path.resolve("../views/js/index.js"));
            break;
    }

}

exports.sendImage = function (req, res) {
    try {
        var id = req.params.id;
        id = id.split(":").map(val => val);
        log.write("File Image ID:", id[1]);
        res.sendFile(path.resolve("../views/images/hotel/" + id[1]));
    } catch (ex) {
        log.write("---------->EXCEPTION<----------", ex);
    }
}