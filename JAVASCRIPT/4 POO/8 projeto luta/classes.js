class character{

    _life = 1;
    maxLife=1;
    attack=0;
    defense=0;
    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(valor){    
        this._life = valor < 0 ? 0 : valor;
    }
}

class warrior extends character{
    constructor(name){
        super(name);
        this.attack = 10;
        this.defense = 8;
        this.maxLife = 100;
        this.life = 100;
    }
}

class mage extends character{
    constructor(name){
        super(name);
        this.attack = 15;
        this.defense = 3;
        this.maxLife = 80;
        this.life = 80;
    }
}

class littleMonster extends character{
    constructor(name){
        super(name);
        this.attack = 3;
        this.defense = 3;
        this.maxLife = 40;
        this.life = 40;
    }
}

class bigMonster extends character{
    constructor(name){
        super(name);
        this.attack = 10;
        this.defense = 6;
        this.maxLife = 100;
        this.life = 100;
    }
}

class stage{
    constructor(fighter1,fighter2,fighter1El,fighter2El,logObj){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.logObj = logObj;
    }

    start(){
        this.updateHtml();

        this.fighter1El.querySelector('.attackbutton').addEventListener('click',()=>this.doAttack(this.fighter1,this.fighter2));
        this.fighter2El.querySelector('.attackbutton').addEventListener('click',()=>this.doAttack(this.fighter2,this.fighter1));
    }

    updateHtml(){
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - 
        ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - 
        ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacker,receiver){
        
        if(attacker.life <= 0 || receiver.life <= 0){
            this.logObj.addMsg("Um deles ja esta morto!");
        return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actual_attack = attacker.attack * attackFactor;
        let actual_defense = receiver.defense * defenseFactor;

        if(actual_attack > actual_defense){
            receiver.life -= actual_attack;
            this.logObj.addMsg("O ataque de " + attacker.name + " acertou! causando" + actual_attack + " de dano.");
        }else{
            this.logObj.addMsg("O ataque de " + attacker.name + " falhou!");
        }
        this.updateHtml();
    }
}

class log{
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }
    addMsg(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = '';
        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}