var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var pedidoController = require("../controllers/pedidos")();


module.exports = function(){
    var app = express();
    app.set("port", 3000);
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.get("/", pedidoController.index);
    
    return app;
}