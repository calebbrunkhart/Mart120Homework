function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(220);

    textSize(22)
    text('Self-Portrait', 20, 30)

    //head
    fill(245, 222, 179);
    circle(250, 200, 200);

    //eyebrows
    fill(0, 0, 0);
    rect(210, 155, 30, 5);
    rect(260, 155, 30, 5);

    //mouth
    line(200, 245, 300, 245);

    //eyes
    fill(150, 75, 0);
    circle(225, 175, 10);
    circle(275, 175, 10);
    point(225, 175);
    point(275, 175);

    //nose
    fill(245, 222, 179);
    triangle(240, 220, 260, 220, 250, 200);

    //body
    fill(0, 150, 0)
    rect(170, 300, 160, 180)
    line(170, 300, 150, 410)
    line(330, 300, 350, 410)
    line(170, 480, 170, 500)
    line(330, 480, 330, 500)

    fill(0, 0, 0)
    text('Caleb Brunkhart', 300, 520)
}