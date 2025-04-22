cores=['azul','roxo','verde','amarelo','vermelho'];

for( let i in cores){
    console.log(cores[i]);
}

console.log("--------------------------");
for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

console.log("--------------------------");
for( let cor of cores){
    console.log(cor);
}