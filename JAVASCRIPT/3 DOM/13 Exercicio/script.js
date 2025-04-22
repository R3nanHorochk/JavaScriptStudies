
function soltou(e){
    
    if(e.key == "Enter"){
        const input = document.querySelector("input");
        let newLi = document.createElement("li");
        newLi.innerText = input.value;
        const ul = document.querySelector("ul");
        ul.appendChild(newLi);
        input.value = "";
    }
}
//usando pelo html

//podemos fazer com jasvript
const input = document.querySelector("input");
input.addEventListener("keyup",soltou);