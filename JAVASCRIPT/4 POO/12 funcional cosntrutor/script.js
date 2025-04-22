function createPerson(name,lastname,age){
    return{
        name,
        lastname,
        age,
        getFullname(){
            return `${this.name} ${this.lastname}`;
        },
        start(){

        }
    }
}

/*
let person = {
    name:"Renan",
    lastname:"Horochk",
    age:18,
    getFullname(){
        return `${this.name} ${this.lastname}`;
}
}*/

let person = createPerson("Renan","Horochk",18);
console.log(person.getFullname());

//objeto n tem construtor mas podemos emular isso