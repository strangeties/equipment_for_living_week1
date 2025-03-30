// ----------------
// GLOBAL VARIABLES
// ----------------
var canvas = document.getElementById("sauron");
var ctx = canvas.getContext("2d");

function DrawSauron(center_x, center_y, theta, radius) {
  h = Math.sin(theta * Math.PI) * radius;

  ctx.beginPath();
  // upper lid
  ctx.arc(center_x, center_y + h, radius, (1.0+theta)*Math.PI, (2.0-theta)*Math.PI);
  // lower lid
  ctx.arc(center_x, center_y - h, radius, theta*Math.PI, (1.0-theta)*Math.PI);
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // eye
  ctx.beginPath();
  ctx.arc(center_x, center_y, (radius-h)*0.8, 0, 2*Math.PI);
  ctx.fillStyle = "grey";
  ctx.fill();
  // pupil
  ctx.beginPath();
  ctx.arc(center_x, center_y, (radius-h)*0.2, 0, 2*Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();

  // eye lashes
  for (let i = 0; i < 7; i++) {
    phi = (i + 2) * (1.0 - 2.0 * theta) / 8;
    ctx.beginPath();
    ctx.moveTo(center_x - 1.1 * radius * Math.cos(phi * Math.PI), 
               center_y + h - 1.1 * radius * Math.sin(phi * Math.PI));
    ctx.lineTo(center_x - 1.2 * radius * Math.cos(phi * Math.PI),
               center_y + h - 1.2 * radius * Math.sin(phi * Math.PI));
    ctx.stroke(); 
  }
}

function StartSauron() {
  DrawSauron(300, 300, 0.1, 100)
}

StartSauron()
