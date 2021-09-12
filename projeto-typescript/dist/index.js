"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importação de bibliotecas
var http_1 = require("http");
var queryString = __importStar(require("query-string"));
var url = __importStar(require("url"));
//Definição de porta
var port = 5000;
var server = (0, http_1.createServer)(function (request, response) {
    var urlparse = url.parse(request.url ? request.url : '', true);
    //Receber informações do usuário
    var params = queryString.parse(urlparse.search ? urlparse.search : '');
    response.end("Hello World");
});
// Execução
server.listen(port, function () {
    console.log("Server running on port " + port);
});
