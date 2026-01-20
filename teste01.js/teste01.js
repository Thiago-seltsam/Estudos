const URL = "https://luabfnznxvgecovukmpd.supabase.co/rest/v1/ItensOffshore";

const headers = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDI3ODUzOSwiZXhwIjoyMDc5ODU0NTM5fQ.vFJ7kmVk6mQsiuGv9MOLSUCOS_8XrOBaWUcH6Kn4yG0",
    "Content-Type": "application/json"
};

function get() {}
    return fetch(URL, {
        method: "GET",
        headers: headers
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
     get(data);

})

.catch(function(error){
    document.getElementById("resultado").textContent
    "Erro ao buscar dados."
    console.error(error);
})