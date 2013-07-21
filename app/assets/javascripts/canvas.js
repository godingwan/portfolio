var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
// canvas drawing
var mousedown = false;
var oldx = null;
var oldy = null;

function setupCanvas() {
  canvas.height = 400;
  canvas.width = 1200;
}

function drawSun() {
  var centerX = 20;
  var centerY = 20;
  var radius = 100;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "yellow";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "orange";
  context.stroke();
}

function drawSunLights() {
  // yellow lines
  context.beginPath();
  context.moveTo(150, 20);
  context.lineTo(250, 20);
  context.lineWidth = 5;
  context.strokeStyle = "yellow";
  context.lineCap = 'round';
  context.stroke();

  context.beginPath();
  context.moveTo(130, 130);
  context.lineTo(200, 200);
  context.lineWidth = 5;
  context.strokeStyle = "yellow";
  context.lineCap = 'round';
  context.stroke();

  context.beginPath();
  context.moveTo(20, 150);
  context.lineTo(20, 250);
  context.lineWidth = 5;
  context.strokeStyle = "yellow";
  context.lineCap = 'round';
  context.stroke();

  // orange lines
  context.beginPath();
  context.moveTo(140, 70);
  context.lineTo(225, 90);
  context.lineWidth = 5;
  context.strokeStyle = "orange";
  context.lineCap = 'round';
  context.stroke();

  context.beginPath();
  context.moveTo(70, 140);
  context.lineTo(110, 225);
  context.lineWidth = 5;
  context.strokeStyle = "orange";
  context.lineCap = 'round';
  context.stroke();
}

function drawClouds() {
  // cloud one
  // begin custom shape
  context.beginPath();
  context.moveTo(270, 180);
  context.bezierCurveTo(230, 200, 230, 250, 330, 250);
  context.bezierCurveTo(350, 280, 420, 280, 440, 250);
  context.bezierCurveTo(520, 250, 520, 220, 490, 200);
  context.bezierCurveTo(530, 140, 470, 130, 440, 150);
  context.bezierCurveTo(420, 105, 350, 120, 350, 150);
  context.bezierCurveTo(300, 105, 250, 120, 270, 180);
  // complete custom shape
  context.closePath();
  context.fillStyle = "white";
  context.shadowColor = '#999';
  context.shadowBlur = 10;
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'rgb(0, 0, 50)';

  id: "cloud_1";

  context.stroke();

  // cloud two
  context.beginPath();
  context.moveTo(770, 80);
  context.bezierCurveTo(730, 100, 730, 150, 830, 150);
  context.bezierCurveTo(850, 180, 920, 180, 940, 150);
  context.bezierCurveTo(1020, 150, 1020, 120, 990, 100);
  context.bezierCurveTo(1030, 40, 970, 30, 940, 50);
  context.bezierCurveTo(920, 05, 850, 20, 850, 50);
  context.bezierCurveTo(800, 05, 750, 20, 770, 80);
  // complete custom shape
  context.closePath();
  context.fillStyle = "white";
  context.shadowColor = '#999';
  context.shadowBlur = 10;
  context.shadowOffsetX = 7;
  context.shadowOffsetY = 2;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'rgb(0, 0, 50)';
  context.stroke();
}

// canvas drawing
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function onmousedown(ev) {
  var mousePos = getMousePos(canvas, ev);
  mousedown = true;
  oldx = mousePos.x;
  oldy = mousePos.y;
  ev.preventDefault();
}

function onmouseup(ev) {
  mousedown = false;
  ev.preventDefault();
}

function onmousemove(ev) {
  var mousePos = getMousePos(canvas, ev);
  var x = mousePos.x;
  var y = mousePos.y;
  if (mousedown) {
    paint(x, y);
  }
}

function paint(x, y) {
  if (oldx > 0 && oldy > 0) {
    context.moveTo(oldx, oldy);
  }
  context.lineTo(x, y);
  context.shadowColor = 'clear';
  context.lineWidth = 5;
  context.lineCap = 'round';
  context.strokeStyle = 'rgb(0, 0, 50)';
  context.stroke();
  oldx = x;
  oldy = y;
}

canvas.addEventListener('mousedown', onmousedown, false);
canvas.addEventListener('mouseup', onmouseup, false);
canvas.addEventListener('mousemove', onmousemove, false);

setupCanvas();
drawSun();
drawSunLights();
drawClouds();
