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

let nomes = document.getElementsByTagName("h1")
console.log(nomes[0]);
console.log(nomes[1]);
//pega elemento pelo nome da tag