"use strict";

/** Exemplo 1 */

// Procurando (querySelector) 
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");
console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);

/* Para selecionar vários elementos, use querySelectorAll.
O resultado é uma espécie de array de elementos (NodeList) */
const paragrafros = document.querySelectorAll("p");

console.log(paragrafros);

/** Sobre Eventos
 * Um evento é um acontecimento ou fênomeno que, quando acontece, dispara ações em nosso programa/site/aplicação.
 * 
 * O JavaScript suporta centenas de tipos de evento. Exemplos: clique do mouse, pressionar teclas, tocar na tela, rolagem da página
 */

// Exemplo detectando eventos


exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "h2 acionado";
    mensagem01.classList.add("destaque");
})

mensagem01.addEventListener("dblclick", function (){
    mensagem01.textContent = "";
    mensagem01.classList.remove("destaque");
})

