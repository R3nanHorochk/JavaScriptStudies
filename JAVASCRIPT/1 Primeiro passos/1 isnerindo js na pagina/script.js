console.log("hello world");
alert("hello world");
let idade = 18;
console.log("eu tenho "+ idade);
let bolo = ["chocolate","branquinho","doce de leite"];
for(i = 0; i < bolo.length; i++){
    console.log(bolo[i]);
}
let nome = {
    nome: "Renan",
    idade: 18,
    sexo: "masculino"}
    console.log(nome);

    console.log(typeof nome.nome)

let isMember = true;
let shipping = isMember ? 2 : 10;
console.log(isMember ? "sim - Membro" : "nao - Membro");
console.log(shipping);