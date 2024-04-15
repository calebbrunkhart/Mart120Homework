// x and y for character
var charX = 0;
var charY = 0;
var squarex = 50;
var squarey = 50;
var ex = 400;
var ey = 300;
var mousex = -20;
var mousey = -20;

// movement keys' keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

function setup() {
    createCanvas(500, 600);
    createCharacter(200, 350);
    //setting the movement speed of each obstacle
    movesx = floor(random() * 5) + 1;
    movesy = floor(random() * 5) + 1;
    moveex = floor(random() * 5) + 1;
    moveey = floor(random() * 5) + 1;
    //Deciding the direction the obstacle moves based on its random speed
    if (movesx % 2 == 0) {
        movesx *= -1
    } 
    if (movesy % 2 == 0) {
        movesy *= -1
    }
    if (moveex % 2 == 0) {
        moveex *= -1
    } 
    if (moveey % 2 == 0) {
        moveey *= -1
    }
}

function draw() {
    background(220);

    fill(255, 0, 0);
    textSize(15)
    text('Exit', 470, 560);
    line(470, 600, 470, 565);
    line(470, 565, 500, 565);

    drawCharacter();
    obstacles();
    characterMovement();
    move_obstacle();
    fill(200, 255, 0);
    ellipse(mousex, mousey, 50, 40);

    if (charX >= 470 && charX <= 500 && charY >= 565 && charY <= 600) {
        fill(0, 0, 0);
        textSize(45);
        text('You Win!', 200, 300);
    }
}
    
function characterMovement()
    {
    if(keyIsDown(w))
    {
        charY -= 5;   
    }
    if(keyIsDown(s))
    {
        charY += 5;   
    }
    if(keyIsDown(a))
    {
        charX -= 5;   
    }
    if(keyIsDown(d))
    {
        charX += 5;   
    }
}
function createCharacter(x,y)
    {
    charX = x;
    charY = y;
}

function drawCharacter()
{
    fill(0, 0, 255);
    circle(charX,charY,25);
}

function obstacles() {
    //Creating obstacles
    fill(255, 0, 0);
    square(squarex, squarey, 30);
    fill(0, 0, 0);
    ellipse(ex, ey, 20, 40);
}

function move_obstacle() {
    //Moving the obstacles to the other side of screen if they leave screen
    if (squarex <= -10) {
        squarex = 500
    } else if (squarex >= 510) {
        squarex = 0
    } else if (squarey <= -10) {
        squarey = 600
    } else if (squarey >= 610) {
        squarey = 0
    }
    if (ex <= -10) {
        ex = 500
    } else if (ex >= 510) {
        ex = 0
    } else if (ey <= -10) {
        ey = 600
    } else if (ey >= 610) {
        ey = 0
    }

    //moving obstacles
    squarex += movesx
    squarey += movesy
    ex += moveex
    ey += moveey
}


function mouseClicked() {  
  mousex = mouseX;
  mousey = mouseY;
}