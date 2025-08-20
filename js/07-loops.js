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
    console.log("K vale" + k)
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
for(const livro in livros){
    console.log(livros[livro])
}