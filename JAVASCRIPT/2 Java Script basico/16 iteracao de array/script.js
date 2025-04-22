frutas = ["Maça","UVA","Banana","Abacaxi"];

let bigFruta = frutas.filter(function(fruta){
    return fruta.length > 4;
})

console.log(bigFruta);

let bigFruta2 = frutas.every(function(fruta){
    if(fruta.length > 4){
        return true;
    }else{
        return false;
    }
})
console.log(bigFruta2);
let bigFruta3 = frutas.some(function(fruta){
    if(fruta.length > 4){
        return true;
    }else{
        return false;
    }
})
console.log(bigFruta3);

if(frutas.includes("Abacaxi")){
    console.log("tem abacaxi");
}else{
    console.log("n tem abacaxi");
}