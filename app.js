// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

    // Receber informações do usuário
    const params = queryString.parse(url.parse(req.url, true).search);

    // Salvas as informações em um arquivo
    fs.writeFile('users/mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    })



    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

// Execução
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});