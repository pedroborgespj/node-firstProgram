// Importação de bibliotecas
import { createServer, IncomingMessage, ServerResponse } from 'http';
import * as queryString from 'query-string';
import * as url from 'url';
import * as fs from 'fs';

//Definição de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlparse = url.parse(request.url ? request.url : '', true);

    //Receber informações do usuário
    const params = queryString.parse(urlparse.search ? urlparse.search : '');

    response.end("Hello World");
});

// Execução
server.listen( port, () => {
    console.log(`Server running on port ${port}`);
});