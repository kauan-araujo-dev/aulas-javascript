'use strict';

/**
 * Funções são blocos de código responsáveis por executar determinadas tarefas.
 * Para usar estes blocos/funções, é necessário "chamar/invocar" a função através do seu nome
 * 
 * 
 * No JavaScript, existem várias formas de se criar uma função: função anônima, função nomeada/declarada e arrow function
 */

console.log("Exemplo 1: função anônima");

const exemplo1 = function(){
    //corpo da função: ação que a função vai fazer
    console.log("Olá Função Anônima");
}

//Chamando e invocando uma função
exemplo1();

console.log("Exemplo 2: Função Nomeada/Declarada");
function exemplo2(){

}

console.log("Exemplo 3: Arrow function (função flecha/seta)");

const exemplo3 = () => {
    console.log("Sintaxe Arrow Function!");
}

/* Obs: função (em qualquer sixataxe) também pode trabalhar com parâmetros/argumentos entre os parênteses.
Geralmente, ao terminar o processamento dos dados, a função retorna para fora um resultado */

console.log("Exemplo 4: Função com paramêtros")
function saudacao(nome = "Visitante"){
    console.log("Ola, " + nome)
}

saudacao("Kauan");
saudacao();

console.log("Exemplo 5: Função com retorno")
console.log("Sempre que tivermos a necessidade de trabalhar com o resultado do processamento de uma função, então essa função deve ter o return");
function multiplicar (valor1, valor2){
    return valor1 * valor2;
}

let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

console.log(`Resultado 1: ${resultado1}\nResultado 2 ${resultado2}`);

console.log("\nExemplo 6: Simplificando com Arrow Function");

// Versão 1: Sintaxe declarada

// function somar(valor1, valor2){
//     return valor1 + valor2;
// }

const somar = (valor1, valor2) => 
    valor1 + valor2;


console.log(somar(150, 500));

console.log("\nExemplo 7: formatando valor monetário");
let preco = 5000;
let desconto = preco * 0.10;
let precoFinal = preco - desconto;
console.log("Preço original: " + formatarMoeda(preco));
console.log("Desconto: " + formatarMoeda(desconto));
console.log("Preço final: " + formatarMoeda(precoFinal));

// Exemplo: usando recursos da classe Int1 (Internacionalização);

function formatarMoeda(valor){
const exemplo = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format(valor);

return exemplo

}

