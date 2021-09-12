"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação de bibliotecas
var http_1 = require("http");
//Definição de porta
var port = 5000;
var server = (0, http_1.createServer)(function (request, response) {
});
// Execução
server.listen(port, function () {
    console.log("Server running on port " + port);
});
