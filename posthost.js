const URL = "http://localhost:3000/carros"
const chave = "123456"

fetch(URL,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        apikey: chave,
        "Prefer": "return=representation"
    },
    body : JSON.stringify({
        id:8,
        modelo: "Santana",
        marca: "Chevrolet"
    })
})

.then(function(response){
    console.log(response.status)
    return response.json()
})
.then(function(data){
    console.log("Resposta API")
    console.log(data)
})