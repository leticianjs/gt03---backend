const http = require('http'); // Requisição do módulo http
const soma = require('./soma')

let servidor = http.createServer(function (req, res) { // O módulo http tem o método createServer
    
    let resultado = soma(9, 1)
    res.write(`Resultado da soma: ${resultado}`);  // Parâmetro de createServer
    res.end();                  // Parâmetro de createServer
})

servidor.listen(3000); // Método listen cria a porta que será usada pelo servidor local