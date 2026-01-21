const URL = "https://luabfnznxvgecovukmpd.supabase.co/rest/v1/trabalho?";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzg1MzksImV4cCI6MjA3OTg1NDUzOX0.sc4W-ySg3yHMsEJlIPjT_0-h13Yg7OWCEc661VWU1sw";

// Cabeçalhos padrão
function getHeader() {
    return {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=representation"
    };
}

// =================== GET ===================
function getData(filtro = "") {
    const fullURL = URL + filtro;

    return fetch(fullURL, {
        method: "GET",
        headers: getHeader()
    })
    .then(response => {
        console.log("Status GET:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("Dados recebidos:");
        console.log(data);
        return data;
    });
}

// =================== POST ===================
function postData(dados) {
    return fetch(URL, {
        method: "POST",
        headers: getHeader(),
        body: JSON.stringify(dados)
    })
    .then(response => {
        console.log("Status POST:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("Registro inserido:");
        console.log(data);
        return data;
    });
}

// =================== PATCH ===================
function patchData(filtro, dados) {
    const fullURL = URL + filtro;

    return fetch(fullURL, {
        method: "PATCH",
        headers: getHeader(),
        body: JSON.stringify(dados)
    })
    .then(response => {
        console.log("Status PATCH:", response.status);
        if (response.status === 204) return null;
        return response.json();
    })
    .then(data => {
        console.log("Registro atualizado:");
        console.log(data);
        return data;
    });
}

// =================== DELETE ===================
function deleteData(filtro) {
    const fullURL = URL + filtro;

    return fetch(fullURL, {
        method: "DELETE",
        headers: getHeader()
    })
    .then(response => {
        console.log("Status DELETE:", response.status);
        if (response.status === 204) return "Registro deletado";
        return response.json();
    })
    .then(data => {
        console.log(data);
        return data;
    });
}

// =================== EXEMPLO DE USO ===================
postData({ modelo: "Argo", marca: "Fiat", ano: 2023 })
  .then(() => getData("id_item=eq.5"))          // GET
  .then(() => patchData("id_item=eq.5", { ano: 2020 })) // PATCH
  .then(() => deleteData("id_item=eq.5"))      // DELETE
  .then(() => getData())                        // GET final
  .catch(err => console.error("Erro:", err));
