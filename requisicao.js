const URL = "https://URL_BANCO.COM/?"
const key = "SUA_CHAVE_API"

function getheader() {
    return {
        "Content-Type": "application/json",
        apikey: key,
        Prefer: "return=representation"
    };
}


function getOld() {
    return fetch(URL, {
        method: "GET",
        headers: getheader()
    })
    .then(response => {
        console.log("Status GET (Antes):", response.status);
        return response.json();
    })
    .then(data => {
        console.log("Dados antes:");
        console.log(data);
    });
}

function Att() {
    return fetch(URL, {
        method: "PATCH",
        headers: getheader(),
        body: JSON.stringify({
            modelo: "Mobi",
            marca: "Fiat",
            ano: 2020
        })
    })
    .then(response => {
        console.log("Status PATCH:", response.status);
        if (response.status === 204) return null;
        return response.json(); // Retornando a atualização dos dados
    })

    .then(data => {
        console.log("Retorno do PATCH:");
        console.log(data);
    });
}

function Inserir(dados) {
    return fetch"https://URL_BANCO.COM/? {
        method: "POST",
        headers: getheader(),
        body: JSON.stringify(dados)
    })
    .then(response => {
        console.log("Status POST:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("Registro inserido:");
        console.log(data);
    });
}

function getNovos() {
    return fetch(URL, {
        method: "GET",
        headers: getheader()
    })
    .then(response => response.json())
    .then(data => {
        console.log("Dados depois:");
        console.log(data);
    });
}

function apagar(id) {
    return fetch(`"https://URL_BANCO.COM/"?id_item=eq.${id}`,
        {
            method: "DELETE",
            headers: getheader()
        }
    )
    .then(response => {
        console.log("Status DELETE:", response.status);
        return response.status;
    });
}

Inserir({ id_item:5,modelo: "Mobi", marca: "Fiat", ano: 2015 })
  .then(() => getOld())
  .then(() => Att())
  .then(() => apagar(12))
  .then(() => getNovos())
  .catch(err => console.error("Erro:", err));
