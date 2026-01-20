const URL = "https://luabfnznxvgecovukmpd.supabase.co/rest/v1/ItensOffshore";

const headers = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDI3ODUzOSwiZXhwIjoyMDc5ODU0NTM5fQ.vFJ7kmVk6mQsiuGv9MOLSUCOS_8XrOBaWUcH6Kn4yG0",
    "Content-Type": "application/json"
};

function get() {
    fetch(URL, {
        method: "GET",
        headers: headers
    })
    .then(response => response.json())
    .then(mostrar)
    .catch(() => {
        document.getElementById("resultado").textContent = "Erro ao buscar dados.";
    });
}

function mostrar(data) {
    let resultado = "";

    data.forEach(item => {
        resultado +=
            "ID: " + item.id + "\n" +
            "Categoria: " + item.Categoria + "\n" +
            "Nome: " + item.Nome + "\n" +
            "Fornecedor: " + item.Fornecedor + "\n" +
            "Estoque: " + item.Estoque + "\n" +
            "-----------------------------\n";
    });

    document.getElementById("resultado").textContent =
        resultado || "Nenhum item encontrado.";
}

get();
