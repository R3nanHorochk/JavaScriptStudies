class person{
    salario = 100000.00;
    passos = 0;
    constructor(name,idade){
        this.name = name;
        this.idade = idade;
    }
    
    darUmPass(){
        this.passos += 1;
    }

    setAge(idade2){
        if(typeof idade2 !== "number"){
            return;
        }else{
            this.idade = idade2;
        }
        
    }
}

let pessoa1 = new person("Renan",18);
console.log(pessoa1);
pessoa1.idade = 30;
console.log(pessoa1);

pessoa1.darUmPass();
console.log(pessoa1);

pessoa1.setAge("oi");
console.log(pessoa1);

pessoa1.setAge(5);
console.log(pessoa1);