let x = 300, y = 200, groundY = 550;
let yVel = 0, gravity = 8;

let jumpCount = 0;
var a = 65;
var d = 68;

let collide;
let xmove, ymove, xc, yx;

xVeld = 7;
xVela = 7;

room = 0;
deathCount = 0;


player = {
    x: 300,
    y: 200,
    radius: 25
  }

/*****************************************************************
OBSTACLE CLASS
******************************************************************/
class Obstacle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    getX() {
        return this.x
    }
    getY() {
        return this.y
    }
    getW() {
        return this.w
    }
    getH() {
        return this.h
    }
    drawOb() {
        stroke(0)
        fill(0)
        rect(this.x, this.y, this.w, this.h + 12.5)
    }
}

/****************************************************************
ENEMY CLASS 
*****************************************************************/
class Enemy {
    constructor(x, y, d, h, sx, sy) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.h = h;
        this.sx = sx;
        this.sy = sy;
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getD() {
        return this.d
    }

    getH() {
        return this.h
    }
    getsx() {
        return this.sx
    }
    getsy() {
        return this.sy
    }

    drawE() {
        stroke(0, 100, 100);
        fill(0, 100, 100);
        rectMode(CENTER);
        rect(this.x, this.y, this.d, this.h);
        rectMode(CORNER);
    }

    moveE(xlimit1, xlimit2, ylimit1, ylimit2) {
        if (this.x + this.d / 2 >= xlimit2 || this.x - this.d / 2 <= xlimit1){
            this.sx *= -1;
        }
        if (this.y + this.d / 2 >= ylimit2 || this.y - this.d / 2 <= ylimit1){
            this.sy *= -1;
        }
        this.changex(this.sx);
        this.changey(this.sy);
    }
    changex(v) {
        this.x += v;
    }
    changey(v) {
        this.y += v;
    }
    resetx(v) {
        this.x = v;
    }
    resety(v){
        this.y = v;
    }
} 

/********************************************************************************
SPIKE CLASS
*********************************************************************************/
class Spike {
    constructor(x, y, n, w = 20) {
        this.x = x;
        this.y = y;
        this.n = n;
        this.w = w;

        fill('black')
        stroke('black')
        for (let i = 0; i < n; i++) {
            triangle(this.x, this.y, this.x + this.w, this.y, this.x + this.w/2, this.y - this.w)
            this.x += this.w;
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getN() {
        return this.n;
    }
}


function setup() {
    createCanvas(1000, 600);
    xmove = floor(random() * 5) + 1;
    ymove = floor(random() * 5) + 1;
    xc = 20;
    yc = 20;
    /******************************************************************************************************** 
    ROOM 1 ENEMIES
     ********************************************************************************************************/
    e = new Enemy(560, height - 300, 20, 20, 3, 0), e2 = new Enemy(350, height - 190, 20, 20, 0, 2), 
    e3 = new Enemy(580, height - 171, 50, 50, 0, 0), e4 = new Enemy(125, height - 280, 20, 20, 0, 2)

    /********************************************************************************************************
    ROOM 2 ENEMIES
     ********************************************************************************************************/
    e5 = new Enemy(550, 215, 15, 15, 2, 2), e6 = new Enemy(200, height - 200, 20, 20, -4, 4), 
    e7 = new Enemy(375, height - 275, 20, 20, -6, 6), e8 = new Enemy(800, height - 120, 20, 20, 0, 3), e9 = new Enemy(810, 85, 20, 20, 1, 1);

    /********************************************************************************************************
    ROOM 3 ENEMIES
     ********************************************************************************************************/
    e10 = new Enemy(width - 109, height - 250, 15, 500, 0, 0), e11 = new Enemy(250, 235, 15, 370, 0, 0), 
    e12 = new Enemy(250, 540, 15, 150, 0, 0), e13 = new Enemy(225, height - 90, 20, 20, 0, 3),
    e14 = new Enemy(width - 200, height - 112, 20, 20, 2, 0), e15 = new Enemy(460, 210, 20, 20, 2, 3);
    chaser = new Enemy(width - 50, height - 75, 20, 20, 1.5, 1.5), chaser2 = new Enemy(width - 50, 75, 20, 20, 1, 1);
}

function draw() {
    background('lightblue');
    if (room == 0) {
        room_0();
    } else if (room == 1) {
        room_1();
    } else if (room == 2) {
        room_2();
    } else if (room == 3) {
        room_3();
     } else if (room == 4) {
        room_4();
    } else if (room == 5) {
        room_5();
    }

}

/****************************************************************************
DRAW CHARACTER
*****************************************************************************/
function drawCharacter(player) {
    stroke('blue')
    fill('blue')
    square(player.x, player.y, player.radius)
}

/****************************************************************************
KEY PRESSES W AND R
*****************************************************************************/ 
function keyPressed(){
    if(jumpCount == 0){
        if(key == ' ') 
            yVel = -40
            jumpCount = 1;
    }
    if (key == 'r' && room == 4) {
        room = 0;
        player.x = 200;
        player.y = groundY - 50;
        deathCount = 0;
    }
    if (key == 's' && room == 0) {
        room = 1;
        player.x = 50;
        player.y = 525;
        deathCount = 0;
    }
}

/****************************************************************************
CHARACTER MOVEMENT JUMPING TOO
*****************************************************************************/
function characterMovement() {
    if (keyIsDown(a)) {
        player.x -= xVela
    } 
    if (keyIsDown(d)) {
        player.x += xVeld
    }
}

function jumping() {
    if(player.y + player.radius <= groundY){ 
        if (yVel + gravity >= 0) {
            jumpCount = 1;
        }
        player.y += gravity   
      } 

      player.y += yVel;
      yVel /= 1.2
 }

function chase(e) {
    let dx = player.x - e.getX();
    let dy = player.y - e.getY();
    let angle = atan2(dy, dx);
    
    e.changex(cos(angle) * e.getsx());
    e.changey(sin(angle) * e.getsy());
};

/*******************************************************************************
ROOM 0
********************************************************************************/
function room_0() {
    fill('blue');
    stroke('blue');
    square(xc, yc, 25);
    fill('green');
    stroke('green');
    textSize(40);
    textFont('Impact');
    textAlign(CENTER, CENTER)
    text('The Grand Adventure of Square Man \n \nA game of hard jumps', width / 2, height / 4);
    text('Press S to begin', width / 2, height / 2);
    if (xc - 12.5 <= 0 || xc + 12.5 >= width) {
        xmove *= -1;
    }
    if (yc - 12.5 <= 0 || yc + 12.5 >= height) {
        ymove *= -1;
    }
    xc += xmove;
    yc += ymove;
}
/********************************************************************************************
ROOM 1
*********************************************************************************************/
function room_1() {
    let ground = new Obstacle(-50, 550, 1100, 50);
    let a = new Obstacle(100, height - 170, 100, 4);
    let b = new Obstacle(25, height - 250, 75, 4);
    let c = new Obstacle(333, height - 300, 100, 4);
    let d = new Obstacle(733, height - 170, 100, 4);
    let f = new Obstacle(150, height - 320, 75, 4);
    let exitground = new Obstacle(width - 100, height - 230, 100, 4)
    exit(width - 50, height - 290, 2, 25, player.y);

    let s = new Spike(540, height - 50, 4);

    jumping(); 

    a.drawOb();
    b.drawOb();
    c.drawOb();
    d.drawOb();
    f.drawOb();
    exitground.drawOb();
    ground.drawOb();

    isColliding(a);
    isColliding(b);
    isColliding(c);
    isColliding(d);
    isColliding(f);
    isColliding(ground);
    isColliding(exitground);
    enemyCollision(e, height - 75);
    enemyCollision(e2, height - 75);
    enemyCollision(e3, height - 75);
    enemyCollision(e4, height - 75);
    spikeCollision(s, height - 75);
    if (player.y >= 750) {
        deathCount += 1;
        collide = 1;
        player.x = 25;
        player.y = height - 75;
    }

    characterMovement();
    e.moveE(560 - e.getD()/2 - 100, 560 + e.getD()/2 + 100, 1000, -1000);
    e2.moveE(323, 443, height - 230, height - 50);
    e4.moveE(0, 1000, height - 400, height - 170);

    drawCharacter(player); 
    e.drawE();
    e2.drawE();
    e3.drawE();
    e4.drawE();
    drawLife();
    gameOver();
}
/******************************************************************************************
ROOM 2
*******************************************************************************************/
function room_2() {
    exit(width - 50, 100, 3, 25, player.y);
    let ground = new Obstacle(0, 550, width, 50);
    let a = new Obstacle(0, height - 230, 150, 4);
    let b = new Obstacle(340, height - 87.5, 50, 4);
    let c = new Obstacle(485, height - 87.5, 50, 4);
    let d = new Obstacle(630, height - 87.5, 50, 4);
    let f = new Obstacle(830, height - 150, 170, 4);
    let g = new Obstacle(700, height - 270, 50, 4);
    let h = new Obstacle(500, height - 270, 50, 4);
    let i = new Obstacle(340, 250, 50, 4);
    let j = new Obstacle(200, 200, 75, 4);
    let k = new Obstacle(0, 175, 100, 4);
    let l = new Obstacle(170, 65, 200, 4);
    let m = new Obstacle (520, 100, 100, 4);
    let exitground = new Obstacle(width - 125, 160, 125, 4);

    let s = new Spike(0, 550, 50);

    jumping();
    /**************************
    DRAWING GROUND
    ***************************/
    ground.drawOb();
    a.drawOb();
    b.drawOb();
    c.drawOb();
    d.drawOb();
    f.drawOb();
    g.drawOb();
    h.drawOb();
    i.drawOb();
    j.drawOb();
    k.drawOb();
    l.drawOb();
    m.drawOb();
    exitground.drawOb();

    /***************************
    COLLISION
    ****************************/
    isColliding(a);
    isColliding(b);
    isColliding(c);
    isColliding(d);
    isColliding(f);
    isColliding(g);
    isColliding(h);
    isColliding(i);
    isColliding(j);
    isColliding(k);
    isColliding(l);
    isColliding(m);
    isColliding(ground);
    isColliding(exitground);
    enemyCollision(e5, height - 260);
    enemyCollision(e6, height - 260);
    enemyCollision(e7, height - 260);
    enemyCollision(e8, height - 260);
    enemyCollision(e9, height - 260);
    spikeCollision(s, height - 260);
    if (player.y >= 750) {
        deathCount += 1;
        collide = 1;
        player.x = 25;
        player.y = height - 260;
    }

    e5.moveE(450, 650, 155, 245);
    e6.moveE(100, 300, height - 300, height - 100);
    e7.moveE(200, 400, height - 300, height - 100);
    e8.moveE(0, 100, height - 295, height - 75);
    e9.moveE(630, 870, 10, 200);

    characterMovement();
    drawCharacter(player) 
    e5.drawE();  
    e6.drawE();  
    e7.drawE();   
    e8.drawE();  
    e9.drawE();             
    
    drawLife();
    gameOver();
}
/********************************************************************************************
ROOM 3
*********************************************************************************************/

function room_3() {
    exit(width - 50, height - 110, 5);
    let enterground = new Obstacle(0, 160, 100, 4);
    let a = new Obstacle(150, height - 20, 25, 4);
    let b = new Obstacle(300, height - 20, 25, 4);
    let c = new Obstacle(360, height - 40, 25, 4);
    let d = new Obstacle(420, height - 60, 25, 4);
    let f = new Obstacle(520, height - 100, 25, 4);
    let g = new Obstacle(width - 180, height - 20, 25, 4);
    let h = new Obstacle(width - 155, height - 120, 25, 4);
    let i = new Obstacle(width - 180, height - 220, 25, 4);
    let j = new Obstacle(width - 320, height - 260, 25, 4);
    let k = new Obstacle(width - 460, height - 290, 25, 4);
    let l = new Obstacle(410, 260, 25, 4);
    let m = new Obstacle(310, 200, 25, 4);
    let n = new Obstacle(260, 90, 25, 4);
    let o = new Obstacle(430, 40, 300, 4);
    let p = new Obstacle(width - 100, 200, 60, 4);
    let q = new Obstacle(width - 60, 400, 60, 4);
    let exitground = new Obstacle(width - 100, 550, 100, 4);
     
    let s = new Spike(360, height - 40, 1, 25);
    let s1 = new Spike(width - 100, 200, 3);
    let s2 = new Spike(width -60, 400, 3);

    jumping();

    enterground.drawOb();
    a.drawOb();
    b.drawOb();
    c.drawOb();
    d.drawOb();
    f.drawOb();
    g.drawOb();
    h.drawOb();
    i.drawOb();
    j.drawOb();
    k.drawOb();
    l.drawOb();
    m.drawOb();
    n.drawOb();
    o.drawOb();
    p.drawOb();
    q.drawOb();
    exitground.drawOb();

    isColliding(enterground);
    isColliding(a);
    isColliding(b);
    isColliding(c);
    isColliding(d);
    isColliding(f);
    isColliding(g);
    isColliding(h);
    isColliding(i);
    isColliding(j);
    isColliding(k);
    isColliding(l);
    isColliding(m);
    isColliding(n);
    isColliding(o);
    isColliding(exitground);
    enemyCollision(e10, 100);
    enemyCollision(e11, 100);
    enemyCollision(e12, 100);
    enemyCollision(e13, 100);
    enemyCollision(e14, 100);
    enemyCollision(e15, 100);
    enemyCollision(chaser, 100);
    enemyCollision(chaser2, 100);
    spikeCollision(s, 100);
    spikeCollision(s1, 100);
    spikeCollision(s2, 100);
    if (player.y >= 750) {
        deathCount += 1;
        collide = 1;
        player.x = 25;
        player.y = 100;

    }

    characterMovement();
    chase(chaser);
    chase(chaser2);
    e13.moveE(0, 1000, height - 260, 550);
    e14.moveE(width - 280, width - 155, 0, 1000);
    e15.moveE(400, 800, 90, 300);
    drawCharacter(player);
    e10.drawE();
    e11.drawE();
    e12.drawE();
    e13.drawE();
    e14.drawE();
    e15.drawE();
    chaser.drawE();
    chaser2.drawE();

    drawLife();
    gameOver();

}

/***************************************************************************
ROOM 4 AND 5
****************************************************************************/
function room_4() {
    stroke('blue');
    fill('blue');
    square(xc, yc, 25);
    stroke('red');
    fill('red');
    textFont('arial')
    textSize(40);
    textAlign(CENTER, CENTER);
    text('You Lose :( \n Press R to try again.', width/2, height/2);
    if (xc - 12.5 <= 0 || xc + 12.5 >= width) {
        xmove *= -1;
    }
    if (yc - 12.5 <= 0 || yc + 12.5 >= height) {
        ymove *= -1;
    }
    xc += xmove;
    yc += ymove;
}


 function room_5() {
    stroke('blue');
    fill('blue');
    square(xc, yc, 25);
    stroke(0, 130, 0);
    fill(0, 130, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text('You win!!', width/2, height/2);
    if (xc - 12.5 <= 0 || xc + 12.5 >= width) {
        xmove *= -1;
    }
    if (yc - 12.5 <= 0 || yc + 12.5 >= height) {
        ymove *= -1;
    }
    xc += xmove;
    yc += ymove;  
 }

 /******************************************************************************************* 
EXITS
*********************************************************************************************/

 function exit(rx, ry, r, px, py) {
    fill(0)
    stroke(0)
    rect(rx, ry, 50, 60)

    fill(255, 0, 0)
    triangle(rx + 25, ry - 10, rx + 45, ry - 35, rx + 5, ry - 35)

    if (player.x > rx && player.x < rx + 50 && player.y > ry && player.y < ry + 60) {
        room = r
        player.x = px
        player.y = py
    }
 }

/*********************************************************************************************
LIFE
**********************************************************************************************/
function drawLife() {
    x = 130;
    for (i = 1; i < 4; i ++) {
        if (i <= deathCount) {
            fill(100)
            stroke(100)
        } else {
            fill('blue')
            stroke('blue')
        }
        square(width - x, 40, 20)
            x -= 40
    }
}

/*********************************************************************************************
COLLISIONS
**********************************************************************************************/

function isColliding(ob) {
    if (player.x + player.radius >= ob.getX() && player.x + 12.5 < ob.getW() + ob.getX() &&
    player.y + player.radius <= ob.getY() && player.y - player.radius >= ob.getY() + ob.getH()) {
        0
        player.x = ob.getX() - player.radius/2;
    } else {
        xVeld = 7
    }
    if (player.x - player.radius <= ob.getX() + ob.getW() && player.x + 12.5 > ob.getX() &&
    player.y + player.radius <= ob.getY() && player.y - player.radius >= ob.getY() + ob.getH()) {
        XVela = 0;
        player.x = ob.getX() + ob.getW() + player.radius;
    } else {
        xVela = 7
    }
    if (player.y + player.radius + 4 >= ob.getY() && player.y - player.radius/2 - 4 <= ob.getY() && 
    player.x - player.radius/2 + 11 <= ob.getX() + ob.getW() && player.x + player.radius >= ob.getX()) {
        player.y = ob.getY() - player.radius;
        yVel = 0;
        groundY = ob.getY();
        jumpCount = 0;
    } else {
        groundY = 1000;
    }
    if (player.y - player.radius/2 <= ob.getY() + ob.getH() + 12.5 && player.y + player.radius >= ob.getY() &&
    player.x - player.radius/2 + 11 <= ob.getX() + ob.getW() && player.x + player.radius >= ob.getX()){
        yVel = 0;
        groundY = 1000;
    }
}

function enemyCollision(e, h) {
    if (player.x + player.radius/2 >= e.getX() - e.getD() && player.x - player.radius/2 <= e.getX() && 
    player.y + player.radius/2 >= e.getY() - e.getH()/2 && player.y - player.radius/2 <= e.getY() + e.getH()/2){
        if (collide == 0) {
            deathCount += 1;
            collide = 1;
            player.x = 25;
            player.y = h;
        }
        console.log(deathCount)
    } else {
        collide = 0;
    }
}

function spikeCollision(s, h) {
    if (player.x + player.radius >= s.getX() - s.getN() * 20 && player.x - player.radius/2 <= s.getX() &&
    player.y + player.radius >= s.getY() - 20 && player.y - player.radius <= s.getY()) {
        if (collide == 0) {
            deathCount += 1;
            collide = 1;
            player.x = 25;
            player.y = h;
        }
        console.log(deathCount)
    } else {
        collide = 0;
    }
}

/*****************************************
Game Over
******************************************/

function gameOver() {
    if (deathCount == 3) {
        room = 4;
        chaser.resetx(width - 50);
        chaser.resety(height - 75);
        chaser2.resetx(width - 50);
        chaser2.resety(75);
    }
}