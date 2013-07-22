var canvas_top = document.getElementById('top_canvas');
var context_top = canvas_top.getContext('2d');
// canvas drawing
var mousedown = false;
var oldx = null;
var oldy = null;

function setupCanvasTop() {
  canvas_top.height = 400;
  canvas_top.width = 1200;
}

function drawSun() {
  var centerX = 20;
  var centerY = 20;
  var radius = 100;

  context_top.beginPath();
  context_top.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context_top.fillStyle = "yellow";
  context_top.fill();
  context_top.lineWidth = 5;
  context_top.strokeStyle = "orange";
  context_top.stroke();
}

function drawSunLights() {
  // yellow lines
  context_top.beginPath();
  context_top.moveTo(150, 20);
  context_top.lineTo(250, 20);
  context_top.lineWidth = 5;
  context_top.strokeStyle = "yellow";
  context_top.lineCap = 'round';
  context_top.stroke();

  context_top.beginPath();
  context_top.moveTo(130, 130);
  context_top.lineTo(200, 200);
  context_top.lineWidth = 5;
  context_top.strokeStyle = "yellow";
  context_top.lineCap = 'round';
  context_top.stroke();

  context_top.beginPath();
  context_top.moveTo(20, 150);
  context_top.lineTo(20, 250);
  context_top.lineWidth = 5;
  context_top.strokeStyle = "yellow";
  context_top.lineCap = 'round';
  context_top.stroke();

  // orange lines
  context_top.beginPath();
  context_top.moveTo(140, 70);
  context_top.lineTo(225, 90);
  context_top.lineWidth = 5;
  context_top.strokeStyle = "orange";
  context_top.lineCap = 'round';
  context_top.stroke();

  context_top.beginPath();
  context_top.moveTo(70, 140);
  context_top.lineTo(110, 225);
  context_top.lineWidth = 5;
  context_top.strokeStyle = "orange";
  context_top.lineCap = 'round';
  context_top.stroke();
}

function drawClouds() {
  // cloud one
  // begin custom shape
  context_top.beginPath();
  context_top.moveTo(270, 180);
  context_top.bezierCurveTo(230, 200, 230, 250, 330, 250);
  context_top.bezierCurveTo(350, 280, 420, 280, 440, 250);
  context_top.bezierCurveTo(520, 250, 520, 220, 490, 200);
  context_top.bezierCurveTo(530, 140, 470, 130, 440, 150);
  context_top.bezierCurveTo(420, 105, 350, 120, 350, 150);
  context_top.bezierCurveTo(300, 105, 250, 120, 270, 180);
  // complete custom shape
  context_top.closePath();
  context_top.fillStyle = "white";
  context_top.shadowColor = '#999';
  context_top.shadowBlur = 10;
  context_top.shadowOffsetX = 5;
  context_top.shadowOffsetY = 5;
  context_top.fill();
  context_top.lineWidth = 5;
  context_top.strokeStyle = 'rgb(0, 0, 50)';

  id: "cloud_1";

  context_top.stroke();

  // cloud two
  context_top.beginPath();
  context_top.moveTo(770, 80);
  context_top.bezierCurveTo(730, 100, 730, 150, 830, 150);
  context_top.bezierCurveTo(850, 180, 920, 180, 940, 150);
  context_top.bezierCurveTo(1020, 150, 1020, 120, 990, 100);
  context_top.bezierCurveTo(1030, 40, 970, 30, 940, 50);
  context_top.bezierCurveTo(920, 05, 850, 20, 850, 50);
  context_top.bezierCurveTo(800, 05, 750, 20, 770, 80);
  // complete custom shape
  context_top.closePath();
  context_top.fillStyle = "white";
  context_top.shadowColor = '#999';
  context_top.shadowBlur = 10;
  context_top.shadowOffsetX = 7;
  context_top.shadowOffsetY = 2;
  context_top.fill();
  context_top.lineWidth = 5;
  context_top.strokeStyle = 'rgb(0, 0, 50)';
  context_top.stroke();
}

// canvas drawing
function getMousePos(canvas_top, evt) {
  var rect = canvas_top.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function onmousedown(ev) {
  var mousePos = getMousePos(canvas_top, ev);
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
  var mousePos = getMousePos(canvas_top, ev);
  var x = mousePos.x;
  var y = mousePos.y;
  if (mousedown) {
    paint(x, y);
  }
}

function paint(x, y) {
  if (oldx > 0 && oldy > 0) {
    context_top.moveTo(oldx, oldy);
  }
  context_top.lineTo(x, y);
  context_top.shadowColor = 'clear';
  context_top.lineWidth = 5;
  context_top.lineCap = 'round';
  context_top.strokeStyle = 'rgb(0, 0, 50)';
  context_top.stroke();
  oldx = x;
  oldy = y;
}

canvas_top.addEventListener('mousedown', onmousedown, false);
canvas_top.addEventListener('mouseup', onmouseup, false);
canvas_top.addEventListener('mousemove', onmousemove, false);

setupCanvasTop();
drawSun();
drawSunLights();
drawClouds();
