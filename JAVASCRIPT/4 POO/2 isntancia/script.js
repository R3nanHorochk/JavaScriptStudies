class person{
    salario = 100000.00;
    constructor(name,idade){
        this.name = name;
        this.idade = idade;
    }
}

let pessoa1 = new person("Renan",18);
console.log(pessoa1);
pessoa1.idade = 30;
console.log(pessoa1);