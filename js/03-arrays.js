"use strict";

// Declarando um array (vetor)
let linguagens = ["HTML", "CSS", "JS", "PYTHON", "JAVA"];

//Acessando a estrutura do array inteiro:
console.log(linguagens);

// Acessando um determinado elemento através do índice
console.log(linguagens[0]);

console.log(`O ${linguagens[0]} é uma linguagem de marcação`);
let seiLa = 6;
const coisas = [10, "Senac", "<h2>", seiLa, 15.88];
console.log(coisas[1]);
console.log(coisas[4]);


/* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.

const pokemons = ["Charizard", "Blastoise", "Mewtwo", "Butterfly", "Pikachu", "Snorlax", "Drogonite"];

console.log(`Para essa batalha eu escolho: \n${pokemons[1]} do tipo água!\n${pokemons[4]} do tipo raio!\n${pokemons[6]} do tipo normal!`);

/* Array como MATRIZ DE 2 DIMENSÕES  */

const tecnologias = [
    ["HTML" , "CSS", "JAVASCRIPT"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express"]
];

console.log(tecnologias[0][2]); //JavaScript
console.log(tecnologias[1][0]); //Figma
console.log(tecnologias[2][3]);