fetch("https://luabfnznxvgecovukmpd.supabase.co/rest/v1/trabalho",{
    method:"GET",
    headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzg1MzksImV4cCI6MjA3OTg1NDUzOX0.sc4W-ySg3yHMsEJlIPjT_0-h13Yg7OWCEc661VWU1sw"
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