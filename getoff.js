const URL = "SUA_URL_DADOS";

const headers = {
    apikey: "CHAVE_API",
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
