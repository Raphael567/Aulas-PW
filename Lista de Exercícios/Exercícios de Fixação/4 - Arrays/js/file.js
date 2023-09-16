function manipulaArrays(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    console.log(cores);
}

function manipulaArrays2(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    cores.push("laranja");
 
    console.log(cores);
}

function manipulaArrays3(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    cores.push("laranja");
    let elemento_removido = cores.pop();

    console.log(`Elemento Removido: ${elemento_removido}`);
    console.log(`Array resultante: ${cores}`);
}

function manipulaArrays4(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    cores.push("laranja");
    cores.pop();
    cores.sort();

    console.log(cores);
}

function manipulaArrays5(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    cores.push("laranja");
    cores.pop();
    cores.sort();
    cores.splice(1, 2);

    console.log(cores);
}

function manipulaArrays6(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    cores.push("laranja");
    cores.pop();
    cores.sort();
    cores.splice(1, 2);
    ultimoIndice = cores.length - 1;
    
    console.log(`Primeiro Elemento ${cores[0]}`);
    console.log(`Último Elemento: ${cores[ultimoIndice]}`);
}

function manipulaArrays7(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    cores.push("laranja");
    cores.pop();
    cores.sort();
    cores.splice(1, 2);
    cores.unshift("fucsia");
    
    console.log(`Novo Elemento Adicionado: ${cores}`);
}

function manipulaArrays8(){
    let cores = [
        "branco",
        "azul",
        "vermelho",
        "verde",
        "preto",
        "amarelo",
        "marrom",
        "violeta",
        "rosa",
        "ciano",
        "magenta",
        "cinza"
    ];

    cores.push("laranja");
    cores.pop();
    cores.sort();
    cores.splice(1, 2);
    cores.unshift("fucsia");
    let primeiroElemento = cores.shift();
    
    console.log(`Elemento removido: ${primeiroElemento}`);
    console.log(cores);
}