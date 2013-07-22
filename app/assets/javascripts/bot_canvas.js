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

function drawStem(startX, startY, botQuarterX, botQuarterY, midX, midY, topQuarterX, topQuarterY, endX, endY) {
  context_bot.beginPath();
  context_bot.moveTo(startX, startY);
  context_bot.quadraticCurveTo(botQuarterX, botQuarterY, midX, midY);
  context_bot.quadraticCurveTo(topQuarterX, topQuarterY, endX, endY);
  context_bot.lineWidth = 5;
  context_bot.strokeStyle = "green";
  context_bot.stroke();
}

setupCanvasBot();
// flower 1
drawFlowerCenter(400, 200, 10);
drawPetals(410, 200, 440, 220, 460, 200, 440, 180);
drawPetals(400, 210, 380, 240, 400, 260, 420, 240);
drawPetals(390, 200, 360, 220, 340, 200, 360, 180);
drawPetals(400, 190, 380, 160, 400, 140, 420, 160);
drawStem(400, 400, 430, 350, 400, 300, 370, 250, 390, 210);
// flower 2
drawFlowerCenter(800, 240, 10);
drawPetals(810, 240, 840, 260, 860, 240, 840, 220);
drawPetals(800, 250, 780, 280, 800, 300, 820, 280);
drawPetals(790, 240, 760, 260, 740, 240, 760, 220);
drawPetals(800, 230, 780, 200, 800, 180, 820, 200);
drawStem(800, 400, 770, 360, 800, 320, 830, 270, 810, 250)


