// ----------------
// GLOBAL VARIABLES
// ----------------
const NUM_EYES = 20;

var canvas = document.getElementById("cherubim");
var ctx = canvas.getContext("2d");
var eyes = [];

canvas.addEventListener('mousemove', (e) => {
    for (let i = 0; i < NUM_EYES; i++) {
        eyes[i].UpdateMouse(e.offsetX, e.offsetY);
    }
});

function Start() {
    for (let i = 0; i < NUM_EYES; i++) {
        eyes.push(new Eye(Math.random() * sauron_canvas.width,
                          Math.random() * sauron_canvas.height,
                          Math.random() * 0.1 + 0.05,
                          Math.min(sauron_canvas.width, sauron_canvas.height) *
                              (0.04 + Math.random() * 0.04)));
    }

    for (let i = 0; i < NUM_EYES; i++) {
        eyes[i].Draw(ctx);
    }

    time = 0;
    setInterval(Update, 30);
}

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < NUM_EYES; i++) {
        eyes[i].Draw(ctx);
    }
}

Start();
