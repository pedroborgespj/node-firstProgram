// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('querystring');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {



    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

// Execução
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});