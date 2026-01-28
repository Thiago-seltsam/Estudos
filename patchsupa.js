const chavekey = "SUA_CHAVE_API"

fetch("SUA_URL?id_item=eq.6",{
    method: "PATCH",
    headers:{
        "Content-Type": "application/json",
        apikey: chavekey,
         "Prefer": "return=representation"
    },
    body: JSON.stringify({
        modelo:"Mobi",
        marca: "Fiat",
        ano: 2000,
    })

})
.then(function(response){
    console.log(response.status)
    return response.json();
})
.then(function(data){
    console.log("Atualizado hoje");
    console.log(data);

})