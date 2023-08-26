//  function login(){
   
//    var email = document.getElementById('email').value;
//    var senha = document.getElementById('senha').value;

//    const emailCorreto = "Login";
//    const senhaCorreto = "123456";

//    if(email == emailCorreto && senha == senhaCorreto){
//       document.querySelector('.login_message').innerHTML = "Login Correto";
//       document.querySelector('.login_message').style.color = 'green';
//       alert('Login Correto');
      
//    }  else{
//          document.querySelector('.login_message').innerHTML = "Login Errado";
//          document.querySelector('.login_message').style.color = 'red';
//          alert('Login Errado');
//    }

//    document.querySelector('.show_email').innerHTML = `Email: ${email}`;
//    document.querySelector('.show_password').innerHTML = `Senha: ${senha}`;

//  }

function login(){

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  console.log(email)
  console.log(senha)

  const emailCorreto = "Login";
  const senhaCorreto = "123456";

  if(email == emailCorreto && senha == senhaCorreto){
    document.querySelector('.login_message').innerHTML = "Login Correto";
    alert("Login realizado com sucesso!");
  
  }  else{
      document.querySelector('.login_message').innerHTML = "Login Errado";
      alert("Login não realizado!");
  }

  document.querySelector('.show_email').innerHTML = `Email: ${email}`;
  document.querySelector('.show_password').innerHTML = `Senha: ${senha}`;
}

function somar(){

  var n1 = parseFloat(prompt("Digite o primeiro número"));
  var n2 = parseFloat(prompt("Digite o segundo número"));

  alert(`Resultado: ${n1+n2}`)
  document.querySelector('.resultado').innerHTML = `Resultado: ${n1+n2}`
}

function subtrair(){
  
  var n1 = parseFloat(prompt("Digite o primeiro número"));
  var n2 = parseFloat(prompt("Digite o segundo número"));

  alert(`Resultado: ${n1-n2}`);
  document.querySelector('.resultado').innerHTML = `Resultado: ${n1-n2}`
}

function multiplicar(){
  
  var n1 = parseFloat(prompt("Digite o primeiro número"));
  var n2 = parseFloat(prompt("Digite o segundo número"));

  alert(`Resultado: ${n1*n2}`);
  document.querySelector('.resultado').innerHTML = `Resultado: ${n1*n2}`
}

function dividir(){
  
  var n1 = parseFloat(prompt("Digite o primeiro número"));
  var n2 = parseFloat(prompt("Digite o segundo número"));

  alert(`Resultado: ${n1/n2}`);
  document.querySelector('.resultado').innerHTML = `Resultado: ${n1/n2}`
}

function potencia(){

  var n1 = parseFloat(prompt("Digite o primeiro número"));
  var n2 = parseFloat(prompt("Digite o segundo número"));

  alert(`Resultado: ${n1**n2}`);
  document.querySelector('.resultado').innerHTML = `Resultado: ${n1**n2}`;
}

function raiz(){

  var n1 = parseFloat(prompt("Digite o primeiro número"));
 }

function nome(){
    const nome = document.getElementById("frNome").value;

    alert(`${nome}`);
    document.getElementById("exibeNome").innerHTML = nome;
}

function produto(){
  let produto = document.getElementById('frmProd').value;
  let li = document.createElement("li");

  li.innerHTML = produto;
  let lista = document.getElementById("exibeProduto");

  /*Sintaxe -> parentElement.appendChild(childElement)
  
  parentElement -> É o elemento pai ao qual desejamos adicionar um nó filho
  childElement -> É o nó filho ao qual desejamos adicionar ao elemento pai
  
  Quando utilizamos "appendCHild()" o elemento filho é movido da sua posição atual para se tornar
  um filho do elemento pai, sendo muito útil para construir e manipular a estrutura de uma página
  web.
  
  Na nossa função "produto()", foi utilizado o "appendChild()" para adicionar um novo elemento a lista("li")
  como filho de uma lista existente, permitindo a construção da nossa lista ao longo do tempo, adicionando um 
  novo item cada vez que chamamos a função.*/
  lista.appendChild(li);
  alert(`Novo produto adicionado!`);
}