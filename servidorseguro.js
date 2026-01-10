const http = require("http");
const { json } = require("node:stream/consumers");

const API_KEY = "123456";

//banco de dados
let carros = [
    {id:1, marca:"Tesla", modelo:"Cybertruck"},
    {id:2, marca: "Honda", modelo: "Civic"}
];

const server = http.createServer((req, res) =>{
    // Início Lógica de GET
    if(req.method === "GET" && req.url === "/carros" && req.headers["x-api-key"] === API_KEY){
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(carros));
        return;
    }

    if(req.method === "GET" && req.url === "/carros"){
        res.statusCode = 401; // não foi permitido
        res.end(JSON.stringify(res.statusCode));
        return;
    }
    // Fim da lógica de GET

    if(req.method === "DELETE" && req.url.startsWith("/carros/") && req.headers["x-api-key"] === API_KEY ){
        const id = Number(req.url.split("/")[2]) // Aqui ele transforma o id na url em um número
        const index = carros.findIndex(carros => carros.id === id); // ele procura esse id fornecido

        if(index === -1){
            res.statusCode = 404;
            res.end(JSON.stringify(res.statusCode));
            return
        }
        
        carros.splice(index, 1);

        res.statusCode = 200;
        res.end(JSON.stringify(res.statusCode));
        return;

    }

    // Sem API KEY - Não autorizado
    if (req.method === "DELETE" && req.url.startsWith("/carros;")){
        res.statusCode = 401;
        res.end(JSON.stringify(statusCode));
        return;
    }
    // Fim da lógica DELETE

    res.statusCode = 404;
    res.end(JSON.stringify(res.statusCode));
    return;
    
});

server.listen(3000, () => {
    console.log("Servidor está rodando na url http://localhost:3000/carros")
})