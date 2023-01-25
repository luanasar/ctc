// Objetivo 1: quando o usuário cliclar no botão de ver trailer, devemos abrir o modal com o vídeo do trailer;
// Passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando o JS
// Passo 2: dar um jeito de identificar quando o usuário clicar no botão
// Passo 3: dar um jeito de pegar o elemento da modal no JS
// Passo 4: abrir a modal na tela

// Objetivo 2: quando o usuário clicar no X devemos fechar o modal;
// Passo 1: dar um jeito de pegar o elemento de fechar modal usando o JS;
// Passo 2: dar um jeito de identificar quando o usuário clicar no X;
// Passo 3: fechar a modal;
//
// Objetivo 3: tirar o audio do video quando ele for fechado
// Passo 1: dar uym jeito de pegaro elemento usando JS
// Passo 2: remover o atributo src
//
//

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const image = document.getElementById("image");
const fecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {
  modal.classList.add("aberto");
});

fecharModal.addEventListener("click", () => {
  modal.classList.remove("aberto");
  //   Remover o SRC
  video.setAttribute("src", "");    
});

// OUTRA FORMA DE ESCREVER A FUNÇÃO UTILIZANDO O TOGGLE
// function alternarModal() {
//   modal.classList.add("aberto");
// }

// botaoTrailer.addEventListener("click", () => {
//   alternarModal();
//   //   Adicionar SRC
//   video.setAttribute("src", linkDoVideo);
// });

// fecharModal.addEventListener("click", () => {
//   alternarModal();
//   //   Remove o SRC
//   video.setAttribute("src", "");
// });
