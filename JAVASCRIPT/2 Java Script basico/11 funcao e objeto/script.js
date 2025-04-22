let personagem ={
    nome: "Renan",
    idade: 18, 
    sexo: "masculino",
    sobrenome: "Horochk",
    nomeCompleto: function(){
        return this.nome + " " + this.sobrenome;
    }
}


console.log(personagem.nomeCompleto());