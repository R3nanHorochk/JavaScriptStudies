
function soltou(e){
    console.log(e.code);//codigo da palavra
    console.log(e.key);//nome da palavra
    console.log(e.keyCode);//codigo da tecla
    console.log(e.shiftKey);//se apertou shift
    console.log(e.ctrlKey);//se apertou ctrl
    console.log(e.altKey);//se apertou alt
    console.log("---------------------------");//codigo da tecla
}
//usando pelo html

//podemos fazer com jasvript
const input = document.querySelector("input");
input.addEventListener("keyup",soltou);