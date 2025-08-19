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

// Exemplo 3: array de objetos

console.log("\nExemplo 3\n");

const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K Rolling"
    },
    {
        titulo: "O diário de Anne Frank",
        autor: "Anne Frank"
    },
    {
        titulo: "Turma da Mônica",
        autor: "Maurício de Souza"
    }
]

console.log(livros);
console.log(livros[2].titulo);


/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */


const aluno = {
    nomeCompleto: "Jorge Abreu",
    dataNascimento: "04/01/2005",
    listaDeTelefones: ["(11)2555-5555", "(11)99999-9999"],
    endereco: {
        rua: "Amador Bueno",
    numero: "23",
        bairro: "Penha"
    }
}

console.log(`Nome completo: ${aluno.nomeCompleto}\nTelefone celular: ${aluno.listaDeTelefones[1]}\nBairro: ${aluno.endereco.bairro}`)
