class person{
    
    constructor(name,sobrenome,idade){
        this.name = name;
        this.sobrenome = sobrenome;
        this._idade = idade;
    }

    
    
}

function createPerson(nome,sobrenome,idade){
    let pesoa = new person(nome,sobrenome,idade);
    return pesoa;
}

let p1 = createPerson("Renan","Horochk",18);
 //factory é um conceito ou uma função que instancia as classes