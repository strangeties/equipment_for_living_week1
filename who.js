// ----------------
// GLOBAL VARIABLES
// ----------------
var canvas = document.getElementById("sauron");
var ctx = canvas.getContext("2d");

lone_eye = new Eye(300, 300, 0.1, 100); 

lone_eye.Draw(ctx);
