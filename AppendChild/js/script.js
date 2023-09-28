function produto(){
    let produto = document.getElementById('frmProd').value;
    let li = document.createElement("li");
  
    li.innerHTML = produto;
    let lista = document.getElementById("exibeProduto");
    
    lista.appendChild(li);
    alert(`Novo produto adicionado!`);
  }