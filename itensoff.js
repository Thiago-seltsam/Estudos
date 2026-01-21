// CONFIGURAÇÃO SUPABASE
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

const URL = "https://luabfnznxvgecovukmpd.supabase.co/rest/v1/ItensOffshore";
const headers = { 
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWJmbnpueHZnZWNvdnVrbXBkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDI3ODUzOSwiZXhwIjoyMDc5ODU0NTM5fQ.vFJ7kmVk6qsiuGv9MOLSUCOS_8XrOBaWUcH6Kn4yG0",
  "Accept": "application/json"
};


// ======= FUNÇÃO PARA CRIAR ELEMENTOS =========
function criar(tag, props = {}, children = []) {
  const el = document.createElement(tag);
  for (let key in props) {
    if (key.startsWith("on") && typeof props[key] === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), props[key]);
    } else if (key === "html") {
      el.innerHTML = props[key];
    } else {
      el[key] = props[key];
    }
  }
  children.forEach(child => el.appendChild(child));
  return el;
}

// ======= CSS DINÂMICO =========
const style = criar("style", { html: `
body {margin:0;font-family:Arial,sans-serif;background:#f2f2f2;display:flex;justify-content:center;align-items:flex-start;min-height:100vh;padding:50px 0;}
.wrapper {width:100%;max-width:900px;display:flex;flex-direction:column;align-items:center;gap:20px;}
.card {background:#fff;padding:30px;width:100%;text-align:center;border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,.1);}
.card h2 {margin-bottom: 15px;font-size: 24px;color:#333;}
.card-options {display:flex;flex-wrap:wrap;justify-content:center;gap:15px;margin-top:20px;}
.card-options button {flex:1 1 150px;padding:15px 20px;border:none;border-radius:10px;font-size:16px;font-weight:bold;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;color:#fff;transition: all 0.2s ease-in-out;}
.card-options button:hover {transform: translateY(-3px) scale(1.05);box-shadow:0 6px 12px rgba(0,0,0,0.2);}
.buscar { background:#5b7cfa; }
.registrar { background:#28a745; }
.atualizar { background:#ffc107; color:#000; }
.deletar { background:#dc3545; }
.page { display:none; background:#fff; padding:20px; width:100%; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,.1);}
input { width:100%; padding:8px; margin:5px 0; }
table { width:100%; border-collapse:collapse; margin-top:10px; text-align:left; table-layout: fixed; }
th, td { border:1px solid #ccc; padding:8px; word-wrap: break-word; }
th { background:#eee; }
.success{color:green;}
.error{color:red;}
.centered-table { display:flex; justify-content:center; }
`});
document.head.appendChild(style);

// ======= WRAPPER PRINCIPAL =========
const wrapper = criar("div", { className: "wrapper" });
document.body.appendChild(wrapper);

// ======= CARD PRINCIPAL =========
const card = criar("div", { className: "card" }, [
  criar("h2", { innerText: "Sistema de Itens Offshore" }),
  criar("div", { className: "card-options" }, [
    criar("button", { className:"buscar", innerText:"🔍 Buscar", onclick:()=>abrirPagina("get") }),
    criar("button", { className:"registrar", innerText:"➕ Registrar", onclick:()=>abrirPagina("post") }),
    criar("button", { className:"atualizar", innerText:"✏️ Atualizar", onclick:()=>abrirPagina("patch") }),
    criar("button", { className:"deletar", innerText:"🗑️ Deletar", onclick:()=>abrirPagina("delete") })
  ])
]);
wrapper.appendChild(card);

// ======= PÁGINAS =========
const pages = {};

// --- GET ---
pages.get = criar("div", { className:"page", id:"get" }, [
  criar("h3", { innerText:"Itens Cadastrados" }),
  criar("button", { innerText:"Atualizar tabela", onclick:get }),
  criar("div", { id:"resultadoGet", className:"centered-table" }),
  criar("button", { innerText:"Voltar", onclick:()=>fecharPagina("get") })
]);
wrapper.appendChild(pages.get);

// --- POST ---
pages.post = criar("div", { className:"page", id:"post" }, [
  criar("h3", { innerText:"Registrar Item" }),
  criar("input", { id:"pid", type:"number", placeholder:"ID (opcional)"}),
  criar("input", { id:"pc", placeholder:"Categoria" }),
  criar("input", { id:"pn", placeholder:"Nome" }),
  criar("input", { id:"pf", placeholder:"Fornecedor" }),
  criar("input", { id:"pl", placeholder:"Local" }),
  criar("input", { id:"pe", type:"number", placeholder:"Estoque" }),
  criar("button", { innerText:"Salvar", onclick:postItem }),
  criar("pre", { id:"resultadoPost" }),
  criar("button", { innerText:"Voltar", onclick:()=>fecharPagina("post") })
]);
wrapper.appendChild(pages.post);

// --- PATCH ---
pages.patch = criar("div", { className:"page", id:"patch" }, [
  criar("h3", { innerText:"Atualizar Item" }),
  criar("input", { id:"pid2", type:"number", placeholder:"ID" }),
  criar("input", { id:"pn2", placeholder:"Novo nome" }),
  criar("input", { id:"pf2", placeholder:"Novo fornecedor" }),
  criar("input", { id:"pl2", placeholder:"Novo local" }),
  criar("input", { id:"pe2", type:"number", placeholder:"Novo estoque" }),
  criar("button", { innerText:"Atualizar", onclick:patchItem }),
  criar("pre", { id:"resultadoPatch" }),
  criar("button", { innerText:"Voltar", onclick:()=>fecharPagina("patch") })
]);
wrapper.appendChild(pages.patch);

// --- DELETE ---
pages.delete = criar("div", { className:"page", id:"delete" }, [
  criar("h3", { innerText:"Deletar Item" }),
  criar("input", { id:"did", type:"number", placeholder:"ID do item" }),
  criar("button", { className:"deletar", innerText:"Deletar", onclick:deletarItem }),
  criar("pre", { id:"resultadoDelete" }),
  criar("button", { innerText:"Voltar", onclick:()=>fecharPagina("delete") })
]);
wrapper.appendChild(pages.delete);

// ======= FUNÇÕES DE CONTROLE =========
function abrirPagina(id){
  Object.values(pages).forEach(p=>p.style.display="none");
  pages[id].style.display="block";
}
function fecharPagina(id){ pages[id].style.display="none"; }

// ======= CRUD =========

// GET
function get(){
  const container = document.getElementById("resultadoGet");
  container.innerHTML = "Carregando...";
  fetch(URL+"?select=*", { headers })
    .then(r=>{ if(!r.ok) throw new Error(r.statusText); return r.json(); })
    .then(data=>{
      if(!data.length){ container.innerHTML="Nenhum item encontrado"; return; }
      data.sort((a,b)=>a.id-b.id);
      let html='<table><tr><th>ID</th><th>Categoria</th><th>Nome</th><th>Fornecedor</th><th>Local</th><th>Estoque</th></tr>';
      data.forEach(i=>{
        html+=`<tr>
                  <td>${i.id}</td>
                  <td>${i.Categoria||'-'}</td>
                  <td>${i.Nome||'-'}</td>
                  <td>${i.Fornecedor||'-'}</td>
                  <td>${i.Local||'-'}</td>
                  <td>${i.Estoque||0}</td>
               </tr>`;
      });
      html+='</table>';
      container.innerHTML = html;
    })
    .catch(err=>container.innerHTML="Erro: "+err.message);
}

// POST com senha
function postItem(){
  const senha = prompt("Digite a senha para registrar itens:");
  if(senha !== "123456"){ alert("Senha incorreta!"); return; }

  const id = document.getElementById("pid").value.trim();
  const categoria = document.getElementById("pc").value.trim();
  const nome = document.getElementById("pn").value.trim();
  const fornecedor = document.getElementById("pf").value.trim();
  const local = document.getElementById("pl").value.trim();
  const estoque = Number(document.getElementById("pe").value);

  if(!categoria || !nome || !fornecedor || isNaN(estoque)){
    document.getElementById("resultadoPost").textContent="Preencha todos os campos obrigatórios";
    return;
  }

  const dados = { Categoria: categoria, Nome: nome, Fornecedor: fornecedor, Local: local, Estoque: estoque };
  if(id) dados.id = Number(id);

  fetch(URL, {
    method:"POST",
    headers:{ ...headers, "Content-Type":"application/json", Prefer:"return=representation" },
    body: JSON.stringify(dados)
  })
  .then(r=>r.json())
  .then(data=>{
    document.getElementById("resultadoPost").textContent="✅ Item cadastrado:\n"+JSON.stringify(data,null,2);
    get();
  })
  .catch(()=>document.getElementById("resultadoPost").textContent="❌ Erro ao cadastrar item");
}

// PATCH
function patchItem(){
  const id = document.getElementById("pid2").value;
  if(!id){ alert("Informe o ID"); return; }
  const dados = {};
  if(document.getElementById("pn2").value) dados.Nome=document.getElementById("pn2").value.trim();
  if(document.getElementById("pf2").value) dados.Fornecedor=document.getElementById("pf2").value.trim();
  if(document.getElementById("pl2").value) dados.Local=document.getElementById("pl2").value.trim();
  if(document.getElementById("pe2").value) dados.Estoque=Number(document.getElementById("pe2").value);
  if(Object.keys(dados).length===0){ document.getElementById("resultadoPatch").textContent="Informe pelo menos um campo para atualizar."; return; }

  fetch(URL+"?id=eq."+id, {
    method:"PATCH",
    headers:{ ...headers, "Content-Type":"application/json", Prefer:"return=representation" },
    body: JSON.stringify(dados)
  })
  .then(r=>r.json())
  .then(data=>{ document.getElementById("resultadoPatch").textContent="✅ Item atualizado:\n"+JSON.stringify(data,null,2); get(); })
  .catch(()=>document.getElementById("resultadoPatch").textContent="❌ Erro ao atualizar item");
}

// DELETE com senha
function deletarItem(){
  const senha = prompt("Digite a senha para deletar itens:");
  if(senha !== "123456"){ alert("Senha incorreta!"); return; }

  const id = document.getElementById("did").value;
  if(!id){ alert("Informe o ID"); return; }
  fetch(URL+"?id=eq."+id,{method:"DELETE", headers})
    .then(r=>{ if(!r.ok) throw new Error(r.statusText); document.getElementById("resultadoDelete").textContent="✅ Item deletado!"; get(); })
    .catch(()=>document.getElementById("resultadoDelete").textContent="❌ Erro ao deletar item");
}

// Inicializa GET
get();
