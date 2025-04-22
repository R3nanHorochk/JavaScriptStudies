let logObj = new log(document.querySelector("#log"));

let char = new warrior("Renan");
let mosnter = new littleMonster("mosnta");

const cenario = new stage(char,mosnter,document.querySelector("#hero"),document.querySelector("#monster"),logObj);
cenario.start();