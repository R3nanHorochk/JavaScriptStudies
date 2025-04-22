function teste(idade){
    if(idade >= 18){
        console.log("maior de idade");
    }else{
        console.log("menor de idade");
    }
}

function idadeAno(idade, ano,anoatual){
    let idadeAno = (ano - anoatual);
    let idadeAno2 = idadeAno + idade;
    console.log(`Você tera " + ${idadeAno2} + " em " + ${ano}`);
}

function idadeAno(){
    let idadeAno = 3;
    return idadeAno
}

let idade = 18;
idadeAno(idade, 2026,2024);
let i = idadeAno();
console.log(`Numero Tres: ${i}`);