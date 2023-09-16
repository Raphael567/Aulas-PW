function somaNumeros(){
    let n1 = parseFloat(prompt("Digite um número:"));
    let n2 = parseFloat(prompt("Digite outro número:"));
    console.log(`Ex1 - Soma: ${n1+n2}`);
}

function subtraiNumeros(n1, n2){
    let subtracao = n1 - n2;
    console.log(`Ex2 - Subtração: ${subtracao}`);
}

function criaObjeto(){
    let usuario = {};
    
    usuario.nome = prompt("Digite seu nome");
    usuario.idade = parseInt(prompt("Digite sua idade"));
    usuario.time_favorito = prompt("Digite seu time favorito");

    console.log(`
    Ex3 - Objeto Usuário: 
    Nome: ${usuario.nome} 
    Idade: ${usuario.idade} 
    Time Favorito: ${usuario.time_favorito}`
    );
}