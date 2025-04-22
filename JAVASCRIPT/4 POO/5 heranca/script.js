class person{
    
    constructor(name,sobrenome,idade){
        this.name = name;
        this.sobrenome = sobrenome;
        this._idade = idade;
    }

    dizerOla(){
        console.log("Ola");
    }
    
}

class student extends person{

    constructor(name,id){
        
        super(name);
        this.id = id;
    }



    HELLO(){
        dizerOla();
    }
}

let p1 = new student("Renan",1);
console.log(p1);
p1.dizerOla();