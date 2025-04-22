


function clicou(){
    const teste = document.querySelector("#teste1");

    const ul = teste.querySelector('ul');
    console.log(teste.children[0].children);
    console.log(ul);
    console.log(ul.innerHTML);
    //ul.innerHTML = "<li>item 1</li>";
    ul.children[0].innerHTML = "<strong>item 1</strong>";
    ul.children[0].append("(cliquei)"); 
    let newLi = document.createElement("li");
    newLi.innerText = "item 4";
    ul.appendChild(newLi);

    let newbut = document.createElement("button");
    newbut.innerText = "BOTÃO 4";
    ul.after(newbut);

    let newLi2 = document.createElement("ul");
    for(let i = 0; i < 5; i++){
        let newLi3 = document.createElement("li");
        newLi3.innerText = `item ${i+1}`;
        newLi2.appendChild(newLi3);
    }
    ul.before(newLi2);
}
//usamos o append ao inves de += substitui o que ja tem no elemento
//o append adiciona no final