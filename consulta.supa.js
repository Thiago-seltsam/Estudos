<<<<<<< HEAD
fetch("SUA_URL_BANCO",{
    
    method:"GET",
    headers:{
        apikey: "SUA_API_KEY"
=======
fetch("SUA_URL",{
    
    method:"GET",
    headers:{
        "x-api-key": "SUA_CHAVE_API"
>>>>>>> 039f31d0bbef92e9b16c21e2d88df072fcf5eb58
    }
}
)

.then(function(response){
    console.log(response.status);
    return response.json();
})

.then(function(data){
<<<<<<< HEAD
    console.log("\n Resposta API GET")
=======
>>>>>>> 039f31d0bbef92e9b16c21e2d88df072fcf5eb58
    console.log(data);
})
