"use strict";

// Exemplo 1: objeto com dados de uma pessoa;
console.log("Exemplo 1")
const pessoa = {
    //propriedade: valor
    nome: "Cebolinha",
    idade: 7,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);

// Acessamos as propriedades usando nomeDoObjeto.nomeDaPropriedade
console.log(`O ${pessoa.nome} é tem ${pessoa.idade} anos.`);

//Exemplo 2: objeto com array
console.log("\nExemplo2\n");

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: ["A Sociedade do Anel", "As Duas Torres", "O Retorno do Rei"]
};

console.log(livro);
console.log(livro.titulo);

/* Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes) usando 'ponto' e, chegando nela, usamos os 'colchetes' com índice pois se trata de um array.*/
console.log(`Meu livro preferido é ${livro.volumes[1]}`);