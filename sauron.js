// ----------------
// GLOBAL VARIABLES
// ----------------
var sauron_canvas = document.getElementById("sauron");
var sauron_ctx = sauron_canvas.getContext("2d");

lone_eye = new Eye(sauron_canvas.width / 2, sauron_canvas.height / 2, 0.1,
                   Math.min(sauron_canvas.width, sauron_canvas.height) * 0.1);

sauron_canvas.addEventListener(
    'mousemove', (e) => { lone_eye.UpdateMouse(e.offsetX, e.offsetY); });

function Start() {
    lone_eye.Draw(sauron_ctx);
    time = 0;
    setInterval(Update, 30);
}

function Update() {
    ctx.clearRect(0, 0, sauron_canvas.width, sauron_canvas.height);
    lone_eye.Draw(sauron_ctx);
}

Start();
