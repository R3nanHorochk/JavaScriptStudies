class person{
    salario = 100000.00;
    passos = 0;
    constructor(name,sobrenome,idade){
        this.name = name;
        this.sobrenome = sobrenome;
        this._idade = idade;
    }
    
    darUmPass(){
        this.passos += 1;
    }


    get idade(){
        return this._idade;
    }
    get fullname(){
        return `${this.name} ${this.sobrenome}`;
    }
    set idade(x){
        this._idade = x;
    }
}

let pessoa1 = new person("Renan","Horochk",18);
console.log(pessoa1);
pessoa1.idade = 30;
console.log(pessoa1);

pessoa1.darUmPass();
console.log(pessoa1);

console.log(pessoa1);
console.log(pessoa1.fullname);  