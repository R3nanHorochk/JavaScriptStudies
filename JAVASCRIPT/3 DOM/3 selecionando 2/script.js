frutas = ["Maça","UVA","Banana","Abacaxi"];

let bigFruta = frutas.filter(function(fruta){
    return fruta.length > 4;
})
//DOM - Document object model
//signifcado: cada tag é um dom ele é uma organização de como a pagina vai exibir
//pelo dom ele verifica tudo suas propriedades e funções
//o que exibe na tela é o documento
//window seira o relacionado a tela
//document é o conteudo

let nomes = document.getElementById("primeiro");//pega pelo id

console.log(nomes);

let bot = document.getElementsByClassName("botao");//pega pela classe

console.log(bot);

let tag = document.querySelector("h1");//pega um pela tag,classe ou id
console.log(tag);

//para pegar todos devemos fazer assim
let tags = document.querySelectorAll("h1");
console.log(tags);

//pódemos pegar a partir de classes por exemplo document.querySelectorall("#lista li")