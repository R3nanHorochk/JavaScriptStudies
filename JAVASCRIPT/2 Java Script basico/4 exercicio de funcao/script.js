function valida(x,y){
    if(x == "pedro"){
        if(y == "1234"){
            return 1;
        }else{
            return 2;
        }
    }else{
        return 3;
    }
}

let user = "pedroeae";
let senha = "1234";
if(valida(user,senha) == 1){
    console.log("logado");
}else if(valida(user,senha) == 2){
    console.log("senha incorreta");
}else{
    console.log("usuario nao encontrado");
}
