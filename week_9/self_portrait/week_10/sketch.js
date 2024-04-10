var x = 250;
var y = 175;
var eye = 175;
var bodyx = 170;
var r1 = 210;
var r2 = 260;
var r3 = 155;
var s = 22;

function setup() {
    createCanvas(500, 600);
    movementx = floor(random() * 10) + 1;
    movementy = floor(random() * 5) + 1;
    movementx2 = floor(random() * 10) + 1;
    movementr = floor(random() * 2) + 1;
    schange = 1;

}

function draw() {
    background(220);

    textSize(22)
    text('Self-Portrait', 20, 30)

    //head
    fill(245, 222, 179);
    circle(x, 200, 200);

    //eyebrows
    fill(0, 0, 0);
    rect(r1, r3, 30, 5);
    rect(r2, r3, 30, 5);

    //mouth
    line(200, 245, 300, 245);

    //eyes
    fill(150, 75, 0);
    circle(225, eye, 10);
    circle(275, y, 10);
    point(225, eye);
    point(275, y);

    //nose
    fill(245, 222, 179);
    triangle(240, 220, 260, 220, 250, 200);

    //body
    fill(0, 150, 0)
    rect(bodyx, 300, 160, 180)
    line(170, 300, 150, 410)
    line(330, 300, 350, 410)
    line(170, 480, 170, 500)
    line(330, 480, 330, 500)

    textSize(s)
    fill(0, 0, 0)
    text('Caleb Brunkhart', 170, 540)

    if(x >= 400 || x <= 100) {
        movementx *= -1;
    }

    x += movementx;

    if (y >= 225 || y <= 125) {
        movementy *= -1;
    }
    y += movementy;
    eye -= movementy;

    if (bodyx >= 340 || bodyx <= 0) {
        movementx2 *= -1;
    }
    bodyx -= movementx2;

    if(r1 >= 210 || r1 <= 100) {
        movementr *= -1;
    }
    r1 += movementr;
    r2 -= movementr;
    r3 += movementr;

    if (s >= 47 || s <= 21) {
        schange *= -1;
    }
    
    s += schange;
}