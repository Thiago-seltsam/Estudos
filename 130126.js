const http = require("http");

const SUPABASE_URL = "https://luabfnznxvgecovukmpd.supabase.co/rest/v1/trabalho";
const API_KEY = "123456";
const SUPA_BASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzg1MzksImV4cCI6MjA3OTg1NDUzOX0.sc4W-ySg3yHMsEJlIPjT_0-h13Yg7OWCEc661VWU1sw";
let requisicoes = 0;

const server = http.createServer((req, res) => {

    // LOGICA DE GET
    if (req.method === "GET" && req.url === "/trabalho" && req.headers["x-api-key"] === API_KEY && requisicoes <10) {

        res.setHeader("Content-Type", "application/json");

        fetch(SUPABASE_URL, {
            method: "GET",
            headers: {
                apikey: SUPA_BASE_ANON_KEY
            }
        })
        .then(function (response) {
            console.log(response.status);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            res.end(JSON.stringify(data)); // agora envia a resposta corretamente
        })
        .finally(function(){
            requisicoes++;
            console.log("Requisição registrada."+ requisicoes + " requisições já foram feitas no total.");
            });
        

        return;
    }

    if (req.method === "GET" && req.url === "/trabalho") {
        res.statusCode = 401;
        res.end(JSON.stringify(res.statusCode));
        return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify(res.statusCode));
});

server.listen(3000, () => {
    console.log("Servidor esta rodando na url http://localhost:3000/trabalho");
});