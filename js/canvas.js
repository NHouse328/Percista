var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var grd = ctx.createLinearGradient(0, 150, 0, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");


ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 150);

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(200, 50, 30, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
