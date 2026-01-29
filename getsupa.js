fetch("SUA_URL",{
    method:"GET",
    headers: {
        apikey:"API_KEY"
    }
})

.then(function(response){
    console.log(response.status);
    return response.json();
})

.then(function(data){
    console.log("Resposta da API:");
    console.log(data);
})
