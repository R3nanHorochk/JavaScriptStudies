

let cliques = 1;
function clicou(){
    console.log("clicou "  + cliques + " vezes");
    cliques++;
}

let botao = document.querySelector(".botao")
botao.addEventListener("click",clicou);