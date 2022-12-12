let startGame = document.getElementById("startGame");
let snakeGame = document.getElementById("snakeGrid");

console.log(snakeGame.offsetHeight);

let head = document.createElement("div");

let headX = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
let headY = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
let moveOffset;
let timer = 500; 
console.log(moveOffset);

function createSnake(){
   
    head.setAttribute("id","snakeHead");
    snakeGame.appendChild(head);
    head.style.left = `${headX}px`;
    head.style.top = `${headY}px`;
    moveOffset = head.offsetWidth;
}

startGame.addEventListener('click', createSnake);

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
        console.log('Offboundaries');
        removeSnake();
       
    } else {
        console.log("In boundaries");
    }
}

let timing = setInterval(() => {movingSnake(direction)}, timer);

function removeSnake(){
    head.remove();
    headX = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
    headY = (snakeGame.offsetWidth / 2) - (head.offsetWidth / 2);
    clearInterval(timing);
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

