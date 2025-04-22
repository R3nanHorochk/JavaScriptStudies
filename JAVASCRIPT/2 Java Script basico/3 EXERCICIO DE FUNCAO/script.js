function calc(x,y){
    switch(y){
        case 1:
            return x;
        case 2: 
            return (x * 1.2);
        case 3: 
            return (x * 1.5);

        default:
            return (x * 1.5);
    }
}

let metragem = 100;
let quartos = 3;
let calc2 = calc(metragem,quartos);
console.log(`O valor é ${calc2}`);
