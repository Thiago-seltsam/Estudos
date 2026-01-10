fetch("http://localhost:3000/carros/1",{
    
    method:"DELETE",
    headers:{
        "x-api-key": "123456"
    }
}
)

.then(function(response){
    console.log(response.status);
    return response.json();
})

.then(function(data){
    console.log(data);
})