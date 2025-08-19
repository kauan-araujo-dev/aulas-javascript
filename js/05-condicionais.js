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

let maiorDeidade = idade < 18 ? "Menor de idade" : "Maior de idade";

console.log(maiorDeidade)