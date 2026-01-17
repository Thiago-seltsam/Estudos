<<<<<<< HEAD
fetch("https://luabfnznxvgecovukmpd.supabase.co/rest/v1/trabalho",{
    
    method:"GET",
    headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzg1MzksImV4cCI6MjA3OTg1NDUzOX0.sc4W-ySg3yHMsEJlIPjT_0-h13Yg7OWCEc661VWU1sw"
=======
fetch("https://luabfnznxvgecovukmpd.supabase.co",{
    
    method:"GET",
    headers:{
        "x-api-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzg1MzksImV4cCI6MjA3OTg1NDUzOX0.sc4W-ySg3yHMsEJlIPjT_0-h13Yg7OWCEc661VWU1sw"
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