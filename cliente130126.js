fetch ("http://localhost:3000/trabalho", {

    method: "GET",
    headers :{
        "x-api-key" : "123456"
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