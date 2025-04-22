let personagem ={
    nome: "Renan",
    idade: 18, 
    sexo: "masculino",
    caracter :{
        sobrenome: "Horochk",
        idade2: 18
    }
}

console.log(personagem.caracter.idade2);

personagem.caracter.idade2 = 20;

console.log(personagem.caracter.idade2);