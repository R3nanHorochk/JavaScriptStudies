


function clicou(){
 const button = document.getElementById("but2");
 console.log(button.classList);
 button.classList.add("verde");
 button.classList.remove("botao")
 if(button.classList.contains("azul")){
     button.classList.remove("verde");
 }
 button.classList.toggle("azul"); // se tiver ele remove e se não tiver ele adiciona
 //button.classList.replace("verde","azul");
}

//usamos o append ao inves de += substitui o que ja tem no elemento
//o append adiciona no final