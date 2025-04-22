let num = [];
let op = 0;
function add(){
    
    
    
    let num1 = document.getElementById("primeiro").value;
    num1 = Number(num1);
    num.push(num1);
    console.log(num1)
    
    op = 1;
}

function result(){
    let resultado = 0;
    if(op == 1){
        let num2 = document.getElementById("segundo").value;
        num2 = Number(num2);
        num.push(num2);
        resultado = num[0] + num[1];
        console.log(resultado);
    }
    
    document.getElementById("result").innerText = resultado;
}