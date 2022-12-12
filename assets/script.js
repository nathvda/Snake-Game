let startGame = document.getElementById("startGame");
let snakeGame = document.getElementById("snakeGrid");

let gameWidth = snakeGame.style.width = Math.floor((snakeGame.offsetHeight/100))*100;
let gameHeight = snakeGame.style.height = Math.floor((snakeGame.offsetWidth/100))*100;

let head = document.createElement("div");
let snakeFruit = document.createElement("div");
let tailBox = document.createElement("div");
tailBox.setAttribute("id","tail");
snakeGame.append(tailBox);    

let headX = (gameWidth / 2) - (head.offsetWidth / 2);
let headY = (gameHeight / 2) - (head.offsetHeight / 2);
let headWidth;

let headHeight;
let moveOffset;

let fruitX;
let fruitY;

let fruitWidth;
let fruitHeight;

let valueX;
let valueY;
const tail = [];

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
        previousX = headX;
        previousY = headY;
        headX += moveOffset;
        head.style.left = `${headX}px`;
        break;

        case "UP" : 
        previousX = headX;
        previousY = headY;
        headY -= moveOffset;
        head.style.top = `${headY}px`;
        break;

        case "LEFT":
        previousX = headX;
        previousY = headY;     
        headX -= moveOffset;
        head.style.left = `${headX}px`;
        break;

        case "DOWN": 
        previousX = headX;
        previousY = headY;
        headY += moveOffset;
        head.style.top = `${headY}px`;
        break;
    }

    if ((headX + moveOffset) > gameWidth ||
     headX < 0 || 
     headY < 0 ||
     (headY + moveOffset) > gameHeight){
        removeSnake();
       
    } else {

    }

    if (fruitX == headX && fruitY == headY){
        createFruit();
        addSnakeTail();
    } else {
    }

    setInterval( () => { 
        let tailElements = document.getElementById("tail").querySelectorAll("div");

       for (let i = 0 ; i < tailElements.length-1 ; i++){

    
  
        tailElements[0].style.left = `${previousX}px`;
        tailElements[0].style.top = `${previousY}px`;

     if (i > 0 ){
            tailElements[i].style.left = tailElements[i-1].style.left;
            tailElements[i].style.top = tailElements[i-1].style.top;  
        }

    

    }},
    timer);

}

function addSnakeTail(){
        let tailItem = document.createElement("div");
        tailItem.style.width = `${10}px`;
        tailItem.style.height = `${10}px`;
        tailItem.style.left = `${headX}px`;
        tailItem.style.top = `${headY}px`;
        tailBox.appendChild(tailItem);
}




let timing = setInterval(() => {movingSnake(direction)}, timer);

function removeSnake(){
    head.remove();
    headWidth = gameWidth/10;
    headHeight = gameHeight/10;
    head.style.width = `${headWidth}px`;
    head.style.height = `${headHeight}px`;
    headX = Math.floor((gameWidth / 2) - (head.offsetWidth / 2));
    headY = Math.floor((gameHeight/ 2) - (head.offsetWidth / 2));
    clearInterval(timing);
}

function createFruit(){
    snakeFruit.setAttribute("id","snakeFruit");
    snakeFruit.style.width = `${10}px`;
    snakeFruit.style.height = `${10}px`;
    fruitX = Math.floor((Math.random() * gameWidth)/10)*10;
    fruitY = Math.floor((Math.random() * gameHeight)/10)*10;
    snakeFruit.style.left = `${fruitX}px`;
    snakeFruit.style.top = `${fruitY}px`;

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

