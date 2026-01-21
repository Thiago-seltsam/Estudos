fetch("http://localhost:3000/carros",{
    
    method:"GET",

    headers:{
        "x-api-key": "12356"
    }

})

.then(function(response){
    console.log(response.status);
    return response.json();

})

.then(function(data){
    console.log("Resultado da API:");
    console.log(data[0]);});