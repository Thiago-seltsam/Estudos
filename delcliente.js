fetch("SUA_URL_id_item=eq.X",{
    method: "DELETE",
    headers:{
        apikey:"SUA_CHAVE_API"
    }
}
)

.then(function(response){
console.log(response.status);
return;
})
