fetch("http://localhost:3000/carros",{
    
    method:"GET",
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