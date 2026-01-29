const URL = "SUA_URL_COM";

const headers = {
    apikey: "SUA_CHAVE_API",
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
