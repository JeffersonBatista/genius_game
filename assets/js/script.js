let order = [];
let clickOrder = [];
let score = 0;

//0 - Verde | 1 - Vermelho | 2 - Amarelo | 3 - Azul

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
//Função criar ordem aleatória
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//Função acende próxima cor
let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    },number -250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}
//Função checar click
let checkOrder = () =>{
    for (let i in checkOrder) {
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou, iniciando próximo nível!`);
        nextLevel();
    }
}

//Função click user
let click = (color) =>{
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
    
}

//Função que retorna a cor
let createColorElement = (color) =>{
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    };
}

//Função próximo nível
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//Função game over
let gameOver = () =>{
    alert(`Pontuação: ${score}\n Você perdeu o jogo!\n Clique em ok para reiniciar`);
    order = [];
    clickOrder = [];
    playGame();
}

//Função iniciar jogo
let playGame = () =>{
    alert(`Bem vindo ao Game Genius, iniciando!`);
    score = 0;
    nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

playGame();