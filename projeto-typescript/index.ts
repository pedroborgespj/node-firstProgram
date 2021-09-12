// Importação de bibliotecas
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile, readFile } from 'fs';

//Definição de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlparse = url.parse(request.url ? request.url : '', true);
    var resposta;

    //Receber informações do usuário
    const params = parse(urlparse.search ? urlparse.search : '');
    
     // Criar um usuario && Atualizar um usuario
     if(urlparse.pathname == '/criar-atualizar-usuario'){

        // Salvas as informações em um arquivo
        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
            if (err) throw err;
            console.log('Saved!');
        });

        resposta = 'Usuario criado / atualizado com sucesso';

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(resposta);
    }
    // Selecionar usuario
    // else if (urlparse.pathname == '/selecionar-usuario') {
    //     readFile('users/' + params.id + '.txt', function(err, data) {
    //         resposta = data;

    //         response.statusCode = 200;
    //         response.setHeader('Content-Type', 'application/json');
    //         response.end(resposta);
    //     });
    // }

});

// Execução
server.listen( port, () => {
    console.log(`Server running on port ${port}`);
});