


function clicou(){
    const teste = document.querySelector("#teste1");

    const ul = teste.querySelector('ul');
    console.log(teste.children[0].children);
    console.log(ul);
    console.log(ul.innerHTML);
    //ul.innerHTML = "<li>item 1</li>";
    ul.children[0].innerHTML = "<strong>item 1</strong>";
    ul.children[0].innerText = "itemsssss 1";
}
