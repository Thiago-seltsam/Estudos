const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzg1MzksImV4cCI6MjA3OTg1NDUzOX0.sc4W-ySg3yHMsEJlIPjT_0-h13Yg7OWCEc661VWU1sw"
const id =3;

fetch(`https://luabfnznxvgecovukmpd.supabase.co/rest/v1/trabalho?id_item=eq.${id}`, {
    method: "GET", 
    headers: {
        apikey: api 
    }
})

.then(function(response){
    console.log(response.status); 
    return response.json();      
})

.then(function(antes){
    return fetch(`https://luabfnznxvgecovukmpd.supabase.co/rest/v1/trabalho?id_item=eq.${id}`, {
        method: "PATCH", 
        headers:{
            "Content-Type": "application/json", 
            apikey: api,                        
            "Prefer": "return=representation"   
        },
        body: JSON.stringify({
            modelo: "Mobi", 
            marca: "Fiat",  
            ano: 2000       
        })
    })
    .then(function (response) {
        // Converte a resposta do PATCH para JSON
        return response.json().then(function (depois) {
            // Retorna um objeto contendo os dados antes e depois
            return {
                antes: antes[0],   // Primeiro registro antes da alteração
                depois: depois[0]  // Registro retornado após a alteração
            };
        });
    });
})

.then(function(data){
    console.log("O valor de antes e depois da alteração");
    console.log(data);
});
