function mostrar(data){
    let resoltado = ""

    if(data.length === 0){
        resultado = "Nenhum item encontrado.";
    }
    else{
        data.forEach(function (item, index){
            resultado += "ID: " + item.id + " \n";
            resultado += "Categoria: " +item.Categoria + "\n";
            resultado += "Produto : " + item.Produto +"\n";
            resultado += "Quantidade :" + item.Quantidade + "\n";
            resultado += "Fornecedor :" + item.Fornecedor + "\n";
            resultado += " -----------------------------------" + "\n";

        });
    }
    document.getElementById("Resultado").textContent = resultado;
}