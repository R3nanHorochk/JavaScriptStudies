


function clicou(){
    const teste = document.querySelector("#but2");

console.log(teste.getAttribute("type"));
if(teste.hasAttribute("placeholder")){
    console.log("O input tem um placeholder: " +(teste.getAttribute("placeholder")));
}
    teste.setAttribute("type","password");
}

function mostra_senha(){
    const input = document.querySelector("#mostra_pass");
    const but = document.querySelector("#but1");
    if(input.getAttribute("type") == "password"){
        input.setAttribute("type","text");
        but.innerHTML = "Não mostrar";
    }else{
        input.setAttribute("type","password");
        but.innerHTML = "mostrar";
    }
}
//usamos o append ao inves de += substitui o que ja tem no elemento
//o append adiciona no final