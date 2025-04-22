frutas = ["Maça","UVA","Banana"];

frutas.sort();//ordena o array
console.log(frutas);
frutas.reverse();//inverte o array
console.log(frutas);

let cars = [
    {modelo: "Fiat", cor: "Azul"},
    {modelo: "Ferrari", cor: "Vermelho"},
    {modelo: "Mercedes", cor: "Preto"}
]

cars.sort(function(a,b){
    if(a.cor < b.cor){
        return -1;
    }else if(a.cor > b.cor){
        return 1;
    }else{
        return 0;
    }

    //return a.cor - b.cor
});
console.log(cars);
//0 não muda
//-1 vai pra tras
//1 vai pra frente