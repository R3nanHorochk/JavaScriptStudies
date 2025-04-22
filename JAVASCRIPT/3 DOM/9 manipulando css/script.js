


function clicou(){
 const ul = document.querySelector("ul");
 ul.style.backgroundColor = "blue";
 const h1 = document.querySelector("h1");
 h1.style.color = "red";
 h1.style.backgroundColor = "black";
 h1.style.fontSize = "60px";
 const li = document.querySelectorAll("li");
 for(let l of li){
    l.style.color = "red";
}
}


//usamos o append ao inves de += substitui o que ja tem no elemento
//o append adiciona no final