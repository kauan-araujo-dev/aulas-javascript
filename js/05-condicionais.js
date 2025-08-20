"use strict"

console.log("Exemplo 1");

let numero = 50;

if(numero >= 10){
    console.log("Se vc está vendo essa mensagem é porque a condição é verdadeira!");
}

let aluno = "Jaron";
let idade = 18;

if(idade < 18){
    console.log("Menor de idade");
}else{
    console.log("Maior de idade");
}

// 1. Crie duas variáveis conforme a seguir:
 
// - Nota 1 (contendo um valor de 0 a 10)
// - Nota 2 (contendo outro valor de 0 a 10)
 
// 2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
// DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
// 3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
// Caso contrário, mostre "reprovado".

let nota1 = 10;
let nota2 = 4;

let media = (nota1 + nota2) / 2;

if(media >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}

// Condicional ENCADEADA/SUCESSIVA
/* Verificando o desempenho do aluno conforme a média:
 - Média acima de 9? ótimo
 - Média acima de 7? bom
 - Média acima de 5? ruim
 - Média abaixo 5? péssimo
*/

media = 7;

if(media > 9){
    console.log("ÓTIMO");
}else if(media > 7){
    console.log("BOM");
}else if(media > 5){
    console.log("RUIM");
}else{
    console.log("PÉSSIMO")
}

console.log("\nExemplo 4");

/* Condicional COMPOSTA com operador TERNÁRIO */
let situacao = idade >= 18 ? "maior" : "menor";
console.log(situacao);

/*
&& -> E -> AND
|| -> OU -> OR
&& -> NEGAÇÃO -> NOT

*/

//&& -> retorna TRUE se TODAS as condições forem VERDADEIRAS

console.log("Exemplo")
let idade1 = 20;
let temCarta = true;

if(idade >= 18 && temCarta === true){
    console.log("Pode dirigir")
}else{
    console.log("Não pode dirigir")
}

/* Sobre duplo e triplo sinal de igual */
let a = 10;
let b = '10';
let resultadoComparacao = a === b; //FALSE
// resultadoComparacao = a == b;
console.log(resultadoComparacao)



// || - > retorna VERDADEIRO se pelo menos uma das condições for VERDADEIRA
let feriado = false;
let fimDeSemana = false;

if(feriado == true || fimDeSemana == true){
    console.log("Não tem aula!")
}else{
    console.log("Tem aula")
}

// ! -> Inverte a lógica. O que é TRUE, vira FALSE. O que é FALSE, vira TRUE.

// Não está vigorando (false)
let blackFriday = false;
if(!blackFriday){
    console.log("Preços normais")
}else{
    console.log("Preços com descontos")
}