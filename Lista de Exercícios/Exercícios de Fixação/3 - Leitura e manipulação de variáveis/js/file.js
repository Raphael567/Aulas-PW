function calculadora(){
    let n1 = parseFloat(prompt("Digite o primeiro número"));
    let n2 = parseFloat(prompt("Digite o segundo número"));
    alert(`
    + -> Para Soma
    - -> Para Subtração
    * -> Para Multiplicação
    / -> Para Divisão
    `);
    let op = prompt("Digite a operação desejada");

    switch (op){
        case '+':
            console.log(`Resultado: ${n1+n2}`);
            break;
        case '-':
            console.log(`Resultado: ${n1-n2}`);
            break;
        case '*':
            console.log(`Resultado: ${n1*n2}`);
            break;
        case '/':   
            console.log(`Resultado: ${n1/n2}`);
            break;
        default:
            alert("Operação Inválida");
            console.log("Operação Inválida");
    }
}

function mudaConstante(){
    let nm_usuario = prompt("Digite seu nome");
    const nome = nm_usuario;

    console.log(`${nome}`);

    let nm_usuario2 = prompt("Digite outro nome");
    nome = nm_usuario2;
    console.log(`${nome}`);
}