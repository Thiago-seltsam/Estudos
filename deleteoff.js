const URL = "https://luabfnznxvgecovukmpd.supabase.co/rest/v1/ItensOffshore";

const headers = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDI3ODUzOSwiZXhwIjoyMDc5ODU0NTM5fQ.vFJ7kmVk6mQsiuGv9MOLSUCOS_8XrOBaWUcH6Kn4yG0",
    "Content-Type": "application/json"
};

function deletar(id) {
    fetch(URL + "?id=eq." + id, {
        method: "DELETE",
        headers: headers
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("resultado").textContent =
                "Item deletado com sucesso.";
        } else {
            document.getElementById("resultado").textContent =
                "Erro ao deletar item.";
        }
    })
    .catch(() => {
        document.getElementById("resultado").textContent =
            "Erro na requisição.";
    });
}
