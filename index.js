var http = require('http');
var app = require("./config/express")();
//require("./config/database.js")("mongodb://localhost/solo");

http.createServer(app).listen(app.get('port'), function(){
    console.log("express na porta: " + app.get('port'));
});