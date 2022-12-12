let startGame = document.getElementById("startGame");
let snakeGame = document.getElementById("snakeGrid");

console.log(snakeGame.offsetHeight);

let head = document.createElement("div");
let snakeFruit = document.createElement("div");


let headX = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
let headY = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
let moveOffset;
let headWidth;
let headHeight;
let fruitX;
let fruitY;
let fruitWidth;
let fruitHeight;
let timer = 500; 

function createSnake(){

    head.setAttribute("id","snakeHead");
    snakeGame.appendChild(head);
    head.style.left = `${headX}px`;
    head.style.top = `${headY}px`;
    head.style.width = `${10}px`;
    head.style.height = `${10}px`;
    moveOffset = head.offsetWidth;

}

startGame.addEventListener('click', () => {
    createSnake();
    createFruit();}
    );

let direction = ""; 

function movingSnake (direction){
    switch (direction){

        case "RIGHT" : 
        headX += moveOffset;
        head.style.left = `${headX}px`;
        break;

        case "UP" : 
        headY -= moveOffset;
        head.style.top = `${headY}px`;
        break;

        case "LEFT": 
        headX -= moveOffset;
        head.style.left = `${headX}px`;
        break;

        case "DOWN": 
        headY += moveOffset;
        head.style.top = `${headY}px`;
        break;
    }

    if ((headX + moveOffset) > snakeGame.offsetWidth ||
     headX < 0 || 
     headY < 0 ||
     (headY + moveOffset) > snakeGame.offsetHeight){
        removeSnake();
       
    } else {
    }

    if ( headX > fruitX && headX < (fruitX + fruitWidth) && headY > fruitY && headY < (fruitY + fruitHeight)){
        console.log("Touched!");
    } else {
        console.log("Missed");
    }
}

let timing = setInterval(() => {movingSnake(direction)}, timer);

function removeSnake(){
    head.remove();
    headWidth = snakeGame.offsetWidth/10;
    headHeight = snakeGame.offsetHeight/10;
    head.style.width = `${headWidth}px`;
    head.style.height = `${headHeight}px`;
    headX = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
    headY = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
    clearInterval(timing);
}

function createFruit(){
    snakeFruit.setAttribute("id","snakeFruit");
    snakeFruit.style.width = `${10}px`;
    snakeFruit.style.height = `${10}px`;
    fruitX = (Math.random() * (( snakeGame.offsetWidth) - ( 0 + moveOffset))) + moveOffset;
    fruitY = (Math.random() * (( snakeGame.offsetHeight) - ( 0 + moveOffset))) + moveOffset;
    snakeFruit.style.left = `${fruitX}px`;
    snakeFruit.style.top = `${fruitY}px`;
    console.log(snakeFruit.style.top);
    console.log(snakeFruit.style.left);
    snakeGame.appendChild(snakeFruit);
    fruitWidth = 10;
    fruitHeight = 10;
}

window.addEventListener('keydown', (e) =>{

    switch (e.code){
        case "KeyL" : 
        console.log("going right");
        direction = "RIGHT";
        break;

        case "KeyI" : 
        console.log("going up");
        direction = "UP";
        break;

        case "KeyJ" : 
        console.log("going left");
        direction = "LEFT";
        break;

        case "Comma":
        console.log("going down");
        direction = "DOWN";
        break;
    }
});

