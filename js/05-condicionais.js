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