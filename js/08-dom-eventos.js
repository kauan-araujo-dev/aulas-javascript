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

// 1) Crie uma constante nova e selecione o h1 da sua página
// 2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.
// 3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão).

const h1 = document.querySelector("h1");
const textoAnterior = h1.textContent;
const referencias = document.querySelector("#referencias")
h1.addEventListener("mouseover", function(){
    h1.textContent = "Praticando Eventos!";
    h1.classList.add("eventoh1")
})

referencias.addEventListener("click", function(){
    h1.textContent = textoAnterior;
    h1.classList.remove("eventoh1");
})


const btnNoturno = document.querySelector("#noturno");
const textoAnteriorBtn = btnNoturno.textContent;
const links = document.querySelectorAll("a");
btnNoturno.addEventListener("click", function(e){
    pagina.classList.toggle("modo-noturno");
    if(btnNoturno.textContent === textoAnteriorBtn){
        btnNoturno.textContent = "Desativar";

    }else{
        btnNoturno.textContent = textoAnteriorBtn;
    }
})

const janelaModal = document.querySelector("#janelinha");

document.addEventListener("mouseout", abrirModal)
function abrirModal(event){
    if(event.clientY < 0){
        janelaModal.showModal();
        console.log("Tá saindo")
        document.removeEventListener("mouseout", abrirModal)
    }
}

const botaoFechar = janelaModal.querySelector("button");

botaoFechar.addEventListener("click", function(){
    janelaModal.close();
})

