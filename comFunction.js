const URL = "SUA_URL?id_item=eq.6";
const headers = {
    apikey:"SUA_CHAVE_API",
    "Content-Type": "application/json"
};

function GetAntes(){
    return fetch(URL,{
        method: "GET",
        headers: headers
    })
    .then (function(response){
        console.log("Status do GET (Antes):", response.status);
        return response.json();
    })
    .then(function(data){
        console.log("Dados atualizados");
        console.log(data)
    })
}

function Atualizar(){
    return fetch(URL, {
        method: "PATCH",
        headers:headers,
        body: JSON.stringify({
            ano:190,
            marca:"Citroen"
        })
    })
    .then(function(response){
        console.log("Nova atualização (PATCH):", response.status);
        return response;
    });
}

function GetDepois(){
    return fetch (URL, {
        method:"GET",
        headers:headers
    })
    .then(function(response){
       return response.json();
    })
    .then(function(data){
        console.log("Dados novos da Consulta Atualizado (GET):");
        console.log(data);
    })
}
// Execução
GetAntes()
.then(Atualizar)
.then(GetDepois);
