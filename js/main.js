"use strict";
let canvas = document.querySelector('#canvas');
let c = canvas.getContext('2d');
let win;
let lineLength;
let left = new Line(Vector.Zero, Vector.FromDegrees(90));
let right = new Line(new Vector(640, 0), Vector.FromDegrees(90));
let yx = new Line(new Vector(0, 300), Vector.FromDegrees(10));
let yx2 = new Line(new Vector(640, 200), Vector.FromDegrees(-30));
let lines = [left, right, yx, yx2];
const GRAV = new Vector(0, 0.07);
const BOUNCY = new Material('#ff00ff', '#ffffff', 1);
const LESSBOUNCY = new Material('#0000ff', '#ffffff', .9);
let ball = new Ball(10, LESSBOUNCY, new Vector(120, 200)); // = new Ball(10, LESSBOUNCY, new Vector(120, 60), new Vector(1, -4), new Vector(0, .05));
function init() {
    canvas.width = 640;
    canvas.height = 480;
    win = new Vector(canvas.width, canvas.height);
    lineLength = win.magnitude * 2;
    draw();
}
let req;
function update() {
    ball.update(lines);
    draw();
    req = requestAnimationFrame(update);
}
function draw() {
    c.fillStyle = '#000000';
    c.fillRect(0, 0, win.x, win.y);
    lines.forEach(l => drawLine(l));
    ball.draw(c);
}
function drawLine(l, color) {
    l.draw(c, lineLength, color);
}
let angleSlider = document.querySelector('#angleSlider');
let velSlider = document.querySelector('#velSlider');
function start() {
    if (req)
        cancelAnimationFrame(req);
    let vel = Vector.FromDegrees(-parseInt(angleSlider.value)).scale(parseInt(velSlider.value));
    ball = new Ball(10, LESSBOUNCY, new Vector(120, 200), vel, GRAV);
    update();
}
init();
