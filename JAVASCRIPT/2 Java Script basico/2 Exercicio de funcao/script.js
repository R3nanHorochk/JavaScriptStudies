function calc(x,y){
    let calc = x * (y / 100);
    return calc
}

let x = 100;
let y = 10;
let calc2 = calc(x,y);
console.log(`O valor de ${y}% de ${x} e ${calc2}`);
