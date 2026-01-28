const chavesupa ="SUA_CHAVE_KEY";

fetch("https://SUA_URL.COM",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        apikey:chavesupa,
        "Prefer": "return=representation"
    },

    body: JSON.stringify({
        id_item:6,
        modelo: "Mobi",
        marca: "Fiat",
        ano: 2020,

    })
})

.then(function(response){
    console.log(response.status);
    return response.json();
})

.then(function(data){
    console.log("A resposta da API");
    console.log(data);
})