import { sumToCanvas } from './input.js'

// The hole canvas to show how great You are.

var canvas = document.getElementById("canvas")
if (canvas) {
    var ctx = canvas.getContext("2d")
    setInterval(draw, 1000);
    draw();

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        theArc()

    }

    // The ball to visualize Yout fitness!
    function theArc() {
        let y = canvas.height / 2
        let x = sumToCanvas() + (canvas.width / 2)
        ctx.fillStyle = '#FC5C00';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

    }
}