"use strict";

/** Exemplo 1 */

// Procurando (querySelector) 
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body")
console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);

/* Para selecionar vários elementos, use querySelectorAll.
O resultado é uma espécie de array de elementos (NodeList) */
const paragrafros = document.querySelectorAll("p");

console.log(paragrafros)


