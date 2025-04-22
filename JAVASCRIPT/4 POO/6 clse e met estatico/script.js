class person{
    
    static hands = 2;//variavel estatica não esta associada com a isntancia
    //por exemplo sabemos qeu uma pessoa tem 2 mão mas não significa que Renan
    //tem 2 mão
    constructor(name,sobrenome,idade){
        this.name = name;
        this.sobrenome = sobrenome;
        this._idade = idade;
    }

    Bomdia(){
        console.log(`Bom dia ${this.name} eu tenho ${person.hands} mão`);
    }
    
    static sayHi(){
        console.log(`Bom dia `);
    }

    
    
}
 let pessoa = new person("Renan","Horochk",18);
 pessoa.Bomdia();
 person.sayHi();
 //a statica referencia a classe não a uma instancia