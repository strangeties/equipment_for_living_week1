// ----------------
// GLOBAL VARIABLES
// ----------------
var canvas = document.getElementById("sauron");
var ctx = canvas.getContext("2d");

lone_eye = new Eye(300, 300, 0.1, 100); 

canvas.addEventListener('mousemove', (e) => {
  lone_eye.UpdateMouse(e.offsetX, e.offsetY);
});

function Start() {
    lone_eye.Draw(ctx);
    time = 0;
    setInterval(Update, 30);
}

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lone_eye.Draw(ctx);
}

Start()
