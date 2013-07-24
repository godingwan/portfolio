var canvas_bot = document.getElementById('bot_canvas');
var context_bot = canvas_bot.getContext('2d');

function setupCanvasBot() {
  canvas_bot.height = 400;
  canvas_bot.width = 1200;
}

function drawFlowerCenter(centerX, centerY, radius) {
  context_bot.beginPath();
  context_bot.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context_bot.fillStyle = "yellow";
  context_bot.fill();
  context_bot.lineWidth = 5;
  context_bot.strokeStyle = '#000';
  context_bot.stroke();
}

function drawPetals(startX, startY, firstMidX, firstMidY, endX, endY, lastMidX, lastMidY) {
  context_bot.beginPath();
  context_bot.moveTo(startX, startY);
  context_bot.quadraticCurveTo(firstMidX, firstMidY, endX, endY);
  context_bot.quadraticCurveTo(lastMidX, lastMidY, startX, startY);
  context_bot.lineWidth = 5;
  context_bot.strokeStyle = '#000';
  context_bot.fillStyle = "white";
  context_bot.fill();
  context_bot.stroke();
}

// currently buggy with the createRandomFlower()
// function drawStem(startX, startY, botQuarterX, botQuarterY, midX, midY, topQuarterX, topQuarterY, endX, endY) {
//   context_bot.beginPath();
//   context_bot.moveTo(startX, startY);
//   context_bot.quadraticCurveTo(botQuarterX, botQuarterY, midX, midY);
//   context_bot.quadraticCurveTo(topQuarterX, topQuarterY, endX, endY);
//   context_bot.lineWidth = 5;
//   context_bot.strokeStyle = "green";
//   context_bot.stroke();
// }

function createRandomFlower() {
  var randX = Math.floor(Math.random() * 1200) + 1;
  var randY = Math.floor(Math.random() * 400) + 1;

  drawFlowerCenter(randX, randY, 10);
  drawPetals(randX + 10, randY, randX + 40, randY + 20, randX + 60, randY, randX + 40, randY - 20);
  drawPetals(randX, randY + 10, randX - 20, randY + 40, randX, randY + 60, randX + 20, randY + 40);
  drawPetals(randX - 10, randY, randX - 40, randY + 20, randX - 60, randY, randX - 40, randY - 20);
  drawPetals(randX, randY - 10, randX - 20, randY - 40, randX, randY - 60, randX + 20, randY - 40);
}

canvas_bot.onclick=function() {
  createRandomFlower();
}

setupCanvasBot();
