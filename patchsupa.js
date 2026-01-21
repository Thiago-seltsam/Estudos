const chavekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzg1MzksImV4cCI6MjA3OTg1NDUzOX0.sc4W-ySg3yHMsEJlIPjT_0-h13Yg7OWCEc661VWU1sw"

fetch("https://luabfnznxvgecovukmpd.supabase.co/rest/v1/trabalho?id_item=eq.6",{
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