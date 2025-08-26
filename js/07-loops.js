'use strict'

/**Loops ou estruturas de repetição
 * São comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.
 * 
 * Comandos mais tradicionais : while (ENQUANTO) e for (PARA) 
 * 
 * Normalmente, os loops são controlados através de uma variável contadora. Esta variável é comumente chamada de "i", "j", "k" ou qualquer outra letra.
 */

console.log("Exemplo 1: WHILE (enquanto)");

let i = 1;

while(i <= 5){
    console.log("Valor do contador: " + i);
    i++;
}

console.log("\nExemplo 2: FOR(para)");

for(let j = 1; j <= 10; j++){
    console.log("J: " + j)
}

for(let k = 10; k > 1; k --){
    console.log("K vale: " + k)
}

console.log("Exemplo 4: loop e array");

const bandas = ["Slayer", "Metallica", "Iron Maiden", "Nightwish", "Judas Priest"];

for(let i = 0; i < bandas.length; i++){
    console.log(bandas[i])
}
/** Pecorre todo o array, acessando só os valores */
for(const banda of bandas){
    console.log(banda)
}
const livros = {
    nome: "Harry Potter",
    autor: "JK. Roling"
}

//Loop para objetos
for(const prop in livros){
    console.log(livros[prop])
}

/* Exercício */
// 1. Faça um array chamado "clientes" contendo 3 objetos.
 
// Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
// 2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
// - Cliente: Dio, id: 1
// - Cliente: Ozzy, id: 2
// - Cliente: Ian, id: 3

const clientes = [
    {
        identificador: 1,
        nome: "Dio"
    }, 
    {
        identificador: 2,
        nome: "Ozzy"
    },
     {
        identificador: 3,
        nome: "Ian"
    }
];

for(const objeto of clientes){
    console.log(`- Cliente: ${objeto.nome}, id: ${objeto.identificador}`);
}

i = 0;

while(i < clientes.length){
    console.log(`- Cliente: ${clientes[i].nome}, id: ${clientes[i].identificador}`);
    i++;
}

for (let i = 0; i< clientes.length; i++) {
    console.log(`- Cliente: ${clientes[i].nome}, id: ${clientes[i].identificador}`);
}
