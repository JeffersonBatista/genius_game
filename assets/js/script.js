let order = [];
let clickOrder = [];
let score = 0;

//0 - Verde | 1 - Vermelho | 2 - Amarelo | 3 - Azul

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    },number -250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}

let checkOrder = () =>{
    for (let i in checkOrder) {
        if(clickOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou, iniciando próximo nível!`)
    }
}