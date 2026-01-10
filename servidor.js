const http = require("http");

// "banco de dados"
const carros = [
{id:1, marca:"Toyota", modelo: "Corolla"},
{id:2, marca:"Honda", modelo : "Civic"},
{id:3, marca:"Ford", modelo:"Ka"}

];

const server = http.createServer((req, res) =>{
    //endpoint
    if(req.method === "GET" && req.url === "/carros"){
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(carros));
        return;
    }

    res.statusCode = 404; // not found
    res.end(res.statusCode);
});

server.listen(3000, () =>{
    console.log("Servidor rodando na Url: http://localhost:3000/carros")
});