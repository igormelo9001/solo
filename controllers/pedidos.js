

module.exports = function () {
    var controller = {};

    controller.index = function (req, res) {
        res.send("hello world");
    }

    return controller;
}