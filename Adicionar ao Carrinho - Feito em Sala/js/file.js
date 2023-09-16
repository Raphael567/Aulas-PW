function Cadastrar(){
  const produto = {
    nome: document.getElementById("prod_name").value,
    marca: document.getElementById("prod_marca").value,
    preco: document.getElementById("prod_preco").value
  }

  //Criar um novo elemento LI
  const lista_item = document.createElement("li")
  //Adicionar conteúdo nesse elemento
  //lista_item.innerHTML += produto.nome
  //lista_item.innerHTML += produto.marca
  //lista_item.innerHTML += produto.preco
  const prod_name = document.createElement("h3")
  const prod_marca = document.createElement("h4")
  const prod_preco = document.createElement("p")
  prod_name.innerHTML = produto.nome
  prod_marca.innerHTML = produto.marca
  prod_preco.innerHTML = produto.preco
  lista_item.appendChild(prod_name)
  lista_item.appendChild(prod_marca)
  lista_item.appendChild(prod_preco)
 
  //Adicionar esse LI no UL
  document.getElementById("lista_prod").appendChild(lista_item)
  console.log(lista_item)
}
