// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100); // (x, y, width, height)
function drawRect() {
    var canvas = document.getElementById('canvas');
    console.log(canvas.getContext);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'green';


        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);

    }
}

function drawTriangle() {
    var canvas = document.getElementById('triangle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // ctx.fillStyle = 'red';


        // ctx.beginPath();
        // ctx.moveTo(65, 50);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);
        // ctx.closePath();
        // ctx.stroke();
        // ctx.fill();

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();
    }
}
drawRect();
drawTriangle();